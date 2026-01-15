import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, Table, TableCell, TableRow, WidthType } from 'docx';
import { saveAs } from 'file-saver';

interface ShiftData {
  number: number;
  title: string;
  subtitle: string;
  dates: string;
  duration: string;
  description: string;
  goals: string[];
  activities: string[];
}

export const exportToWord = async (shifts: ShiftData[]) => {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          text: "ПРОГРАММА ЛЕТНЕГО ДЕТСКОГО ЛАГЕРЯ",
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
        }),
        new Paragraph({
          text: "«СИЛА РОССИИ В ЕДИНСТВЕ НАРОДОВ»",
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Сроки реализации: ",
              bold: true,
            }),
            new TextRun({
              text: "04 июня – 23 августа 2025 года",
            }),
          ],
          spacing: { after: 200 },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Возраст участников: ",
              bold: true,
            }),
            new TextRun({
              text: "7-17 лет",
            }),
          ],
          spacing: { after: 200 },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Регион: ",
              bold: true,
            }),
            new TextRun({
              text: "Урал",
            }),
          ],
          spacing: { after: 400 },
        }),

        new Paragraph({
          text: "ПОЯСНИТЕЛЬНАЯ ЗАПИСКА",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 400, after: 200 },
        }),

        new Paragraph({
          text: "Направленность программы",
          heading: HeadingLevel.HEADING_3,
          spacing: { before: 200, after: 200 },
        }),
        new Paragraph({
          text: "Программа имеет социально-гуманитарную и физкультурно-спортивную направленность. Она интегрирует патриотическое воспитание, межкультурное взаимодействие, физическое развитие и творческую самореализацию детей.",
          spacing: { after: 200 },
        }),

        new Paragraph({
          text: "Актуальность программы",
          heading: HeadingLevel.HEADING_3,
          spacing: { before: 200, after: 200 },
        }),
        new Paragraph({
          text: "В современной России вопросы единства многонационального народа, сохранения культурного наследия и развития межнациональной толерантности приобретают особое значение. Уральский регион исторически является местом пересечения культур и традиций различных народов.",
          spacing: { after: 200 },
        }),
        new Paragraph({
          text: "Программа отвечает задачам Стратегии государственной национальной политики РФ и направлена на формирование у детей и подростков ценностей гражданской идентичности, уважения к культурному разнообразию и активной жизненной позиции.",
          spacing: { after: 200 },
        }),

        new Paragraph({
          text: "Новизна программы",
          heading: HeadingLevel.HEADING_3,
          spacing: { before: 200, after: 200 },
        }),
        new Paragraph({
          text: "• Интеграция национальных видов спорта в общую спортивную программу лагеря",
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: "• Сюжетно-ролевая игра, объединяющая все смены единой тематикой",
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: "• Использование краеведческого компонента Урала как площадки для межкультурного диалога",
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: "• Практико-ориентированный подход с созданием реальных творческих продуктов",
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: "• Вовлечение детей разного возраста в единую систему мероприятий",
          spacing: { after: 200 },
        }),

        new Paragraph({
          text: "Педагогическая целесообразность",
          heading: HeadingLevel.HEADING_3,
          spacing: { before: 200, after: 200 },
        }),
        new Paragraph({
          text: "Программа базируется на принципах деятельностного и личностно-ориентированного подходов. Через активное участие в спортивных, творческих и образовательных мероприятиях дети:",
          spacing: { after: 200 },
        }),
        new Paragraph({
          text: "• Познают культурное многообразие своей страны на практике",
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: "• Развивают физические качества и приобщаются к здоровому образу жизни",
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: "• Формируют навыки командной работы и межличностной коммуникации",
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: "• Раскрывают творческий потенциал и приобретают новые умения",
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: "• Воспитывают чувство патриотизма и гордости за свою Родину",
          spacing: { after: 400 },
        }),

        new Paragraph({
          text: "КЛЮЧЕВАЯ ИДЕЯ ПРОГРАММЫ",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 400, after: 200 },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "«Единство в многообразии»",
              bold: true,
              italics: true,
              size: 28,
            }),
          ],
          spacing: { after: 200 },
        }),
        new Paragraph({
          text: "Через знакомство с традициями, культурой, спортивными играми и творчеством народов России участники программы осознают, что именно многообразие делает нашу страну сильной и уникальной. Каждая смена — это новое путешествие, открывающее грани единой российской идентичности.",
          spacing: { after: 400 },
        }),

        new Paragraph({
          text: "СОДЕРЖАНИЕ ПРОГРАММЫ",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 400, after: 200 },
        }),
        new Paragraph({
          text: "Программа рассчитана на 5 смен общей продолжительностью 80 дней:",
          spacing: { after: 200 },
        }),
        new Paragraph({
          text: "• Четыре смены по 14 дней каждая",
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: "• Одна смена продолжительностью 21 день",
          spacing: { after: 400 },
        }),

        ...shifts.flatMap((shift) => [
          new Paragraph({
            text: `СМЕНА ${shift.number}: ${shift.title.toUpperCase()}`,
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Подзаголовок: ",
                bold: true,
              }),
              new TextRun({
                text: shift.subtitle,
              }),
            ],
            spacing: { after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Даты проведения: ",
                bold: true,
              }),
              new TextRun({
                text: shift.dates,
              }),
            ],
            spacing: { after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Продолжительность: ",
                bold: true,
              }),
              new TextRun({
                text: shift.duration,
              }),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            text: "Описание смены:",
            bold: true,
            spacing: { after: 100 },
          }),
          new Paragraph({
            text: shift.description,
            spacing: { after: 200 },
          }),
          new Paragraph({
            text: "Цели смены:",
            bold: true,
            spacing: { after: 100 },
          }),
          ...shift.goals.map((goal) => 
            new Paragraph({
              text: `• ${goal}`,
              spacing: { after: 100 },
            })
          ),
          new Paragraph({
            text: "Основные мероприятия:",
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          ...shift.activities.map((activity) => 
            new Paragraph({
              text: `• ${activity}`,
              spacing: { after: 100 },
            })
          ),
        ]),

        new Paragraph({
          text: "ПЛАН-СЕТКА МЕРОПРИЯТИЙ",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 400, after: 200 },
        }),

        ...shifts.flatMap((shift) => {
          const scheduleItems = [
            { days: "День 1-2", activity: `Заезд, знакомство, вводная программа "${shift.subtitle}"` },
            { days: "День 3-5", activity: "Активная фаза: спортивные соревнования, мастер-классы" },
            { days: "День 6-10", activity: "Творческие проекты, походы, тематические квесты" },
          ];

          if (shift.duration === "21 день") {
            scheduleItems.push(
              { days: "День 11-16", activity: "Углублённая работа в мастерских, подготовка итоговых выступлений" },
              { days: "День 17-20", activity: "Финальные проекты, репетиции гала-концерта" },
              { days: "День 21", activity: "Итоговый концерт/фестиваль, награждение, отъезд" }
            );
          } else {
            scheduleItems.push(
              { days: "День 13-14", activity: "Итоговый концерт/фестиваль, награждение, отъезд" }
            );
          }

          return [
            new Paragraph({
              text: `Смена ${shift.number}: ${shift.title} (${shift.dates})`,
              heading: HeadingLevel.HEADING_3,
              spacing: { before: 200, after: 200 },
            }),
            new Table({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph({ text: "Период", bold: true })],
                      width: { size: 25, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                      children: [new Paragraph({ text: "Мероприятия", bold: true })],
                      width: { size: 75, type: WidthType.PERCENTAGE },
                    }),
                  ],
                }),
                ...scheduleItems.map((item) => 
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [new Paragraph(item.days)],
                      }),
                      new TableCell({
                        children: [new Paragraph(item.activity)],
                      }),
                    ],
                  })
                ),
              ],
            }),
            new Paragraph({
              text: "",
              spacing: { after: 200 },
            }),
          ];
        }),

        new Paragraph({
          text: "ОЖИДАЕМЫЕ РЕЗУЛЬТАТЫ",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 400, after: 200 },
        }),
        new Paragraph({
          text: "Личностные результаты:",
          bold: true,
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: "Формирование гражданской идентичности, толерантности, патриотизма",
          spacing: { after: 200 },
        }),
        new Paragraph({
          text: "Физические результаты:",
          bold: true,
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: "Укрепление здоровья, развитие силы, выносливости, ловкости",
          spacing: { after: 200 },
        }),
        new Paragraph({
          text: "Творческие результаты:",
          bold: true,
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: "Раскрытие талантов, освоение народных ремёсел и искусств",
          spacing: { after: 200 },
        }),
        new Paragraph({
          text: "Социальные результаты:",
          bold: true,
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: "Навыки коммуникации, командной работы, лидерства",
          spacing: { after: 400 },
        }),

        new Paragraph({
          text: "ОСОБЕННОСТИ ПРОГРАММЫ",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 400, after: 200 },
        }),
        new Paragraph({
          text: "• Круглосуточное пребывание с полным пансионом",
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: "• Квалифицированные педагоги и спортивные инструкторы",
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: "• Безопасная территория лагеря в живописном районе Урала",
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: "• Спортивная инфраструктура: стадион, бассейн, площадки, скалодром",
          spacing: { after: 100 },
        }),
        new Paragraph({
          text: "• Медицинское сопровождение 24/7",
          spacing: { after: 400 },
        }),
      ],
    }],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, "Программа_Сила_России_в_единстве_народов.docx");
};
