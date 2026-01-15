import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from '@/components/ui/icon';

interface ShiftData {
  number: number;
  title: string;
  subtitle: string;
  dates: string;
  duration: string;
  color: string;
  bgGradient: string;
  icon: string;
  description: string;
  goals: string[];
  activities: string[];
}

const shifts: ShiftData[] = [
  {
    number: 1,
    title: "Многонациональная мозаика России",
    subtitle: "Открытие культурного многообразия",
    dates: "04.06 - 17.06",
    duration: "14 дней",
    color: "text-orange-600",
    bgGradient: "from-orange-500 to-red-500",
    icon: "Globe",
    description: "Знакомство с культурным наследием народов России через интерактивные мастер-классы, спортивные игры и творческие проекты.",
    goals: [
      "Изучить традиции и обычаи разных народов России",
      "Развить толерантность и уважение к культурному разнообразию",
      "Освоить элементы национальных видов спорта"
    ],
    activities: [
      "Фестиваль народных игр (лапта, городки, национальная борьба)",
      "Мастер-классы национальных ремёсел",
      "Кулинарный марафон \"Вкусы России\"",
      "Спортивный квест \"Путь богатыря\"",
      "Концерт народных талантов"
    ]
  },
  {
    number: 2,
    title: "Спортивное братство",
    subtitle: "Объединяя через спорт",
    dates: "18.06 - 01.07",
    duration: "14 дней",
    color: "text-blue-600",
    bgGradient: "from-blue-500 to-cyan-500",
    icon: "Trophy",
    description: "Интенсивная спортивная программа с элементами командообразования и развития лидерских качеств через спорт.",
    goals: [
      "Укрепить физическое здоровье и выносливость",
      "Развить навыки командной работы",
      "Познакомиться с различными видами спорта народов России"
    ],
    activities: [
      "Олимпийские игры малых народов",
      "Турнир по футболу \"Кубок дружбы\"",
      "Скалодром и верёвочный парк",
      "Эстафета \"Сильные вместе\"",
      "Мастер-классы от спортсменов Урала"
    ]
  },
  {
    number: 3,
    title: "Летняя творческая академия",
    subtitle: "Искусство без границ",
    dates: "02.07 - 22.07",
    duration: "21 день",
    color: "text-purple-600",
    bgGradient: "from-purple-500 to-pink-500",
    icon: "Palette",
    description: "Расширенная программа творческого развития с погружением в традиционное и современное искусство народов России.",
    goals: [
      "Раскрыть творческий потенциал каждого ребёнка",
      "Изучить народное декоративно-прикладное искусство",
      "Создать совместные проекты, объединяющие культуры"
    ],
    activities: [
      "Театральная студия \"Многоликая Россия\"",
      "Мастерские народных промыслов (гжель, хохлома, роспись)",
      "Музыкальный лагерь с изучением народных инструментов",
      "Танцевальный марафон народов России",
      "Создание коллективного арт-объекта \"Единство\"",
      "Фото-видео проект \"Мой край\"",
      "Литературные вечера у костра"
    ]
  },
  {
    number: 4,
    title: "Экспедиция \"Родной Урал\"",
    subtitle: "Познаём родной край",
    dates: "23.07 - 05.08",
    duration: "14 дней",
    color: "text-green-600",
    bgGradient: "from-green-500 to-emerald-500",
    icon: "Mountain",
    description: "Туристическо-краеведческая программа с изучением природы, истории и культуры Урала.",
    goals: [
      "Изучить природное и культурное наследие Урала",
      "Развить туристические навыки и выносливость",
      "Воспитать бережное отношение к природе родного края"
    ],
    activities: [
      "Походы по уральским тропам",
      "Скалолазание и ориентирование на местности",
      "Краеведческие квесты \"Легенды Урала\"",
      "Экологический проект \"Чистый берег\"",
      "Ночь под звёздами с астрономией",
      "Встречи с представителями коренных народов Урала"
    ]
  },
  {
    number: 5,
    title: "Фестиваль дружбы народов",
    subtitle: "Праздник единства",
    dates: "06.08 - 19.08",
    duration: "14 дней",
    color: "text-red-600",
    bgGradient: "from-red-500 to-rose-500",
    icon: "Heart",
    description: "Итоговая смена-фестиваль с масштабными мероприятиями, демонстрирующими единство и многообразие России.",
    goals: [
      "Закрепить знания о культурном разнообразии России",
      "Продемонстрировать навыки, полученные за лето",
      "Создать атмосферу дружбы и взаимопонимания"
    ],
    activities: [
      "Гала-концерт \"Мы - Россия!\"",
      "Спортивный праздник \"Игры дружбы\"",
      "Ярмарка народных мастеров",
      "Кулинарный фестиваль национальных блюд",
      "Финальный флешмоб единства",
      "Церемония награждения участников"
    ]
  }
];

const Index = () => {
  const [activeShift, setActiveShift] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-blue-500 to-purple-600 text-white py-20 animate-fade-in">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6">
            <Badge className="text-lg px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm">
              Летний сезон 2025 • 04.06 - 23.08
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight">
              Сила России в единстве народов
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium">
              Программа летнего спортивного лагеря для детей 7-17 лет на Урале
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Icon name="Calendar" size={20} />
                <span className="font-semibold">5 смен</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Icon name="Users" size={20} />
                <span className="font-semibold">7-17 лет</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Icon name="MapPin" size={20} />
                <span className="font-semibold">Урал</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="about" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 h-auto p-2 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="about" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white py-3">
              О программе
            </TabsTrigger>
            <TabsTrigger value="shifts" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white py-3">
              Смены
            </TabsTrigger>
            <TabsTrigger value="schedule" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white py-3">
              План-сетка
            </TabsTrigger>
            <TabsTrigger value="info" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white py-3">
              Детали
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-8 animate-fade-in">
            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl font-heading flex items-center gap-3">
                  <Icon name="FileText" className="text-primary" size={32} />
                  Пояснительная записка
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg leading-relaxed">
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-3 text-primary">Направленность программы</h3>
                  <p>
                    Программа имеет <strong>социально-гуманитарную и физкультурно-спортивную направленность</strong>. 
                    Она интегрирует патриотическое воспитание, межкультурное взаимодействие, физическое развитие 
                    и творческую самореализацию детей.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 py-4 rounded-r-lg">
                  <h3 className="font-heading font-semibold text-xl mb-3 text-blue-700">Актуальность</h3>
                  <p className="mb-3">
                    В современной России вопросы единства многонационального народа, сохранения культурного наследия 
                    и развития межнациональной толерантности приобретают особое значение. Уральский регион исторически 
                    является местом пересечения культур и традиций различных народов.
                  </p>
                  <p>
                    Программа отвечает задачам <strong>Стратегии государственной национальной политики РФ</strong> и 
                    направлена на формирование у детей и подростков ценностей гражданской идентичности, уважения 
                    к культурному разнообразию и активной жизненной позиции.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6 bg-purple-50 py-4 rounded-r-lg">
                  <h3 className="font-heading font-semibold text-xl mb-3 text-purple-700">Новизна программы</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Интеграция национальных видов спорта в общую спортивную программу лагеря</li>
                    <li>Сюжетно-ролевая игра, объединяющая все смены единой тематикой</li>
                    <li>Использование краеведческого компонента Урала как площадки для межкультурного диалога</li>
                    <li>Практико-ориентированный подход с созданием реальных творческих продуктов</li>
                    <li>Вовлечение детей разного возраста в единую систему мероприятий</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6 bg-green-50 py-4 rounded-r-lg">
                  <h3 className="font-heading font-semibold text-xl mb-3 text-green-700">Педагогическая целесообразность</h3>
                  <p className="mb-3">
                    Программа базируется на принципах <strong>деятельностного и личностно-ориентированного подходов</strong>. 
                    Через активное участие в спортивных, творческих и образовательных мероприятиях дети:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Познают культурное многообразие своей страны на практике</li>
                    <li>Развивают физические качества и приобщаются к здоровому образу жизни</li>
                    <li>Формируют навыки командной работы и межличностной коммуникации</li>
                    <li>Раскрывают творческий потенциал и приобретают новые умения</li>
                    <li>Воспитывают чувство патриотизма и гордости за свою Родину</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl font-heading flex items-center gap-3">
                  <Icon name="Target" className="text-secondary" size={32} />
                  Ключевая идея программы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg">
                <p className="leading-relaxed">
                  <strong className="text-2xl block mb-4 text-primary font-heading">
                    "Единство в многообразии"
                  </strong>
                  Через знакомство с традициями, культурой, спортивными играми и творчеством народов России 
                  участники программы осознают, что именно многообразие делает нашу страну сильной и уникальной. 
                  Каждая смена — это новое путешествие, открывающее грани единой российской идентичности.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl">
                    <Icon name="Heart" className="mx-auto mb-3 text-orange-600" size={40} />
                    <h4 className="font-heading font-semibold mb-2">Воспитание</h4>
                    <p className="text-sm">Формирование гражданской идентичности и патриотизма</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl">
                    <Icon name="Zap" className="mx-auto mb-3 text-blue-600" size={40} />
                    <h4 className="font-heading font-semibold mb-2">Развитие</h4>
                    <p className="text-sm">Физическое, творческое и интеллектуальное развитие</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                    <Icon name="Users" className="mx-auto mb-3 text-purple-600" size={40} />
                    <h4 className="font-heading font-semibold mb-2">Социализация</h4>
                    <p className="text-sm">Навыки коммуникации и командной работы</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shifts" className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shifts.map((shift) => (
                <Card 
                  key={shift.number} 
                  className="shadow-xl border-0 overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer bg-white/95 backdrop-blur-sm"
                  onClick={() => setActiveShift(shift.number)}
                >
                  <div className={`h-2 bg-gradient-to-r ${shift.bgGradient}`}></div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={`text-base px-3 py-1 ${shift.color} bg-opacity-10`}>
                        Смена {shift.number}
                      </Badge>
                      <Icon name={shift.icon as any} className={shift.color} size={32} />
                    </div>
                    <CardTitle className="text-2xl font-heading leading-tight">
                      {shift.title}
                    </CardTitle>
                    <CardDescription className="text-base font-medium">
                      {shift.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Calendar" size={16} className="text-muted-foreground" />
                        <span className="font-semibold">{shift.dates}</span>
                        <Badge variant="outline">{shift.duration}</Badge>
                      </div>
                      <p className="text-sm leading-relaxed">{shift.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl font-heading">
                  Детали смены {activeShift}
                </CardTitle>
                <CardDescription className="text-lg">
                  {shifts[activeShift - 1].title}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-3 flex items-center gap-2">
                    <Icon name="Target" className="text-primary" />
                    Цели смены
                  </h3>
                  <ul className="space-y-2">
                    {shifts[activeShift - 1].goals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${shifts[activeShift - 1].bgGradient} flex-shrink-0`}></div>
                        <span className="text-base">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-3 flex items-center gap-2">
                    <Icon name="Star" className="text-secondary" />
                    Основные мероприятия
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {shifts[activeShift - 1].activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-muted/50 p-3 rounded-lg">
                        <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-base">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="animate-fade-in">
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl font-heading flex items-center gap-3">
                  <Icon name="CalendarDays" className="text-accent" size={32} />
                  План-сетка мероприятий
                </CardTitle>
                <CardDescription className="text-base">
                  Примерный распорядок ключевых событий по сменам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-3">
                  {shifts.map((shift) => (
                    <AccordionItem key={shift.number} value={`shift-${shift.number}`} className="border rounded-lg px-4 bg-gradient-to-r from-white to-muted/20">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-4 text-left">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${shift.bgGradient} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                            {shift.number}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-heading font-semibold text-lg">{shift.title}</h4>
                            <p className="text-sm text-muted-foreground">{shift.dates} • {shift.duration}</p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 pb-2">
                        <div className="space-y-3 pl-16">
                          <div className="grid gap-2">
                            <div className="flex gap-3 items-start">
                              <Badge variant="outline" className="flex-shrink-0">День 1-2</Badge>
                              <span className="text-sm">Заезд, знакомство, вводная программа "{shift.subtitle}"</span>
                            </div>
                            <div className="flex gap-3 items-start">
                              <Badge variant="outline" className="flex-shrink-0">День 3-5</Badge>
                              <span className="text-sm">Активная фаза: спортивные соревнования, мастер-классы</span>
                            </div>
                            <div className="flex gap-3 items-start">
                              <Badge variant="outline" className="flex-shrink-0">День 6-10</Badge>
                              <span className="text-sm">Творческие проекты, походы, тематические квесты</span>
                            </div>
                            {shift.duration === "21 день" && (
                              <>
                                <div className="flex gap-3 items-start">
                                  <Badge variant="outline" className="flex-shrink-0">День 11-16</Badge>
                                  <span className="text-sm">Углублённая работа в мастерских, подготовка итоговых выступлений</span>
                                </div>
                                <div className="flex gap-3 items-start">
                                  <Badge variant="outline" className="flex-shrink-0">День 17-20</Badge>
                                  <span className="text-sm">Финальные проекты, репетиции гала-концерта</span>
                                </div>
                              </>
                            )}
                            <div className="flex gap-3 items-start">
                              <Badge variant="outline" className="flex-shrink-0">
                                {shift.duration === "21 день" ? "День 21" : "День 13-14"}
                              </Badge>
                              <span className="text-sm">Итоговый концерт/фестиваль, награждение, отъезд</span>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="info" className="space-y-6 animate-fade-in">
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl font-heading flex items-center gap-3">
                  <Icon name="Info" className="text-green-600" size={32} />
                  Дополнительная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-heading font-semibold text-xl flex items-center gap-2">
                      <Icon name="Clock" className="text-primary" />
                      Сроки реализации
                    </h3>
                    <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-4 rounded-lg">
                      <p className="text-lg font-semibold text-primary">04 июня - 23 августа 2025</p>
                      <p className="text-sm text-muted-foreground mt-1">Полный летний сезон</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading font-semibold text-xl flex items-center gap-2">
                      <Icon name="Users" className="text-secondary" />
                      Участники
                    </h3>
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                      <p className="text-lg font-semibold text-secondary">Дети 7-17 лет</p>
                      <p className="text-sm text-muted-foreground mt-1">Все возрастные группы</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-xl mb-4 flex items-center gap-2">
                    <Icon name="Award" className="text-accent" />
                    Ожидаемые результаты
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-l-4 border-orange-500 pl-4 py-2">
                      <h4 className="font-semibold mb-1">Личностные</h4>
                      <p className="text-sm text-muted-foreground">Формирование гражданской идентичности, толерантности, патриотизма</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                      <h4 className="font-semibold mb-1">Физические</h4>
                      <p className="text-sm text-muted-foreground">Укрепление здоровья, развитие силы, выносливости, ловкости</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 py-2">
                      <h4 className="font-semibold mb-1">Творческие</h4>
                      <p className="text-sm text-muted-foreground">Раскрытие талантов, освоение народных ремёсел и искусств</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 py-2">
                      <h4 className="font-semibold mb-1">Социальные</h4>
                      <p className="text-sm text-muted-foreground">Навыки коммуникации, командной работы, лидерства</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 p-6 rounded-xl">
                  <h3 className="font-heading font-semibold text-xl mb-3 flex items-center gap-2">
                    <Icon name="Sparkles" className="text-red-600" />
                    Особенности программы
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-600 flex-shrink-0 mt-1" size={18} />
                      <span>Круглосуточное пребывание с полным пансионом</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-600 flex-shrink-0 mt-1" size={18} />
                      <span>Квалифицированные педагоги и спортивные инструкторы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-600 flex-shrink-0 mt-1" size={18} />
                      <span>Безопасная территория лагеря в живописном районе Урала</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-600 flex-shrink-0 mt-1" size={18} />
                      <span>Спортивная инфраструктура: стадион, бассейн, площадки, скалодром</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-600 flex-shrink-0 mt-1" size={18} />
                      <span>Медицинское сопровождение 24/7</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-heading font-semibold mb-2">
            Сила России в единстве народов
          </p>
          <p className="text-sm text-slate-400">
            Программа летнего спортивного лагеря • Урал • 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
