import { LiturgyResponse } from "../types/liturgy";

export function formatFullLiturgyToMarkdown(liturgy: LiturgyResponse): string {
    const parts: string[] = [];

    parts.push(formatHeader(liturgy));
    parts.push(formatLiturgicalColor(liturgy));
    parts.push(formatCollect(liturgy));
    parts.push(formatReadings(liturgy));
    parts.push(formatOfferings(liturgy));
    parts.push(formatCommunion(liturgy));
    parts.push(formatAntiphons(liturgy));

    return parts.filter(Boolean).join("\n\n");
}

export function formatLiturgyReadingsToMarkdown(liturgy: LiturgyResponse): string {
    const parts: string[] = [];

    parts.push(formatHeader(liturgy));
    parts.push(formatLiturgicalColor(liturgy));
    parts.push(formatReadings(liturgy));

    return parts.filter(Boolean).join("\n\n");
}

export function formatLiturgyPrayersToMarkdown(liturgy: LiturgyResponse): string {
    const parts: string[] = [];

    parts.push(formatHeader(liturgy));
    parts.push(formatLiturgicalColor(liturgy));
    parts.push(formatAntiphons(liturgy));
    parts.push(formatCollect(liturgy));
    parts.push(formatOfferings(liturgy));
    parts.push(formatCommunion(liturgy));

    return parts.filter(Boolean).join("\n\n");
}

function formatHeader(liturgy: LiturgyResponse): string {
    return `📅 **${liturgy.data}**\n *${liturgy.liturgia}*`;
}

function formatLiturgicalColor(liturgy: LiturgyResponse): string {
    return `🎨 **Cor litúrgica:** ${liturgy.cor}`;
}

function formatCollect(liturgy: LiturgyResponse): string {
    return `🕯️ **Oração da Coleta**\n${liturgy.oracoes.coleta}`;
}

function formatOfferings(liturgy: LiturgyResponse): string {
    return `🕯️ **Oração sobre as Oferendas**\n${liturgy.oracoes.oferendas}`;
}

function formatCommunion(liturgy: LiturgyResponse): string {
    return `🕯️ **Oração pós Comunhão**\n${liturgy.oracoes.comunhao}`;
}

function formatReadings(liturgy: LiturgyResponse): string {
    const sections: string[] = [];
    const firstReading = liturgy.leituras?.primeiraLeitura?.[0];
    const psalm = liturgy.leituras?.salmo?.[0];
    const secondReading = liturgy.leituras?.segundaLeitura?.[0];
    const gospel = liturgy.leituras?.evangelho?.[0];

    if (firstReading) {
        sections.push(
            formatBiblicalReadings("📖 Primeira Leitura", firstReading)
        );
    }

    if (psalm) {
        sections.push(formatPsalm(psalm));
    }

    if (secondReading) {
        sections.push(formatBiblicalReadings(
            "📜 **Segunda Leitura**",
            secondReading
        ));
    }

    if (gospel) {
        sections.push(formatBiblicalReadings(
            "✝️ **Evangelho**",
            gospel
        ));
    }

    return sections.join("\n\n");
}

function formatBiblicalReadings(titulo: string, leitura: any): string {
    return `${titulo} (${leitura.referencia})\n${leitura.texto}`;
}

function formatPsalm(salmo: any): string {
    return `🎶 **Salmo** (${salmo.referencia})\n*Refrão:* ${salmo.refrao}\n${salmo.texto}`;
}

function formatAntiphons(liturgy: LiturgyResponse): string {
    if (!liturgy.antifonas) return "";

    const parts: string[] = [];

    if (liturgy.antifonas.entrada) {
        parts.push(`🚪 **Antífona de entrada**\n${liturgy.antifonas.entrada}`);
    }

    if (liturgy.antifonas.comunhao) {
        parts.push(`🍞 **Antífona da comunhão**\n${liturgy.antifonas.comunhao}`);
    }

    return parts.join("\n\n");
}