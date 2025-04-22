import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export function gerarPDFPJMock(nome, bruto, comissao, liquido) {
  const doc = new jsPDF()
  doc.setFontSize(18)
  doc.text('Relatório de Fechamento PJ', 14, 20)

  doc.setFontSize(12)
  doc.text(`Prestador: ${nome}`, 14, 30)
  doc.text(`Faturamento Bruto: R$ ${bruto}`, 14, 38)
  doc.text(`Comissão Aplicada: ${comissao * 100}%`, 14, 46)
  doc.text(`Valor Líquido: R$ ${liquido}`, 14, 54)

  autoTable(doc, {
    startY: 70,
    head: [['Serviço', 'Valor']],
    body: [
      ['Frete Curitiba-SP', 'R$ 1.800,00'],
      ['Frete SP-BH', 'R$ 1.200,00']
    ]
  })

  doc.save(`Fechamento_PJ_${nome}.pdf`)
}
