import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      title: 'Ринопластика',
      description: 'Коррекция формы носа для гармоничных пропорций лица',
      price: 'от 250 000 ₽',
      icon: 'Sparkles'
    },
    {
      title: 'Блефаропластика',
      description: 'Омоложение области вокруг глаз, устранение нависания век',
      price: 'от 180 000 ₽',
      icon: 'Eye'
    },
    {
      title: 'Маммопластика',
      description: 'Коррекция формы и размера груди, эндопротезирование',
      price: 'от 320 000 ₽',
      icon: 'Heart'
    },
    {
      title: 'Липосакция',
      description: 'Удаление локальных жировых отложений, контурирование тела',
      price: 'от 150 000 ₽',
      icon: 'Zap'
    },
    {
      title: 'Фейслифтинг',
      description: 'Комплексное омоложение лица, подтяжка кожи',
      price: 'от 400 000 ₽',
      icon: 'Star'
    },
    {
      title: 'Отопластика',
      description: 'Коррекция формы ушных раковин',
      price: 'от 120 000 ₽',
      icon: 'Waves'
    }
  ];

  const priceList = [
    { category: 'Лицо', procedures: [
      { name: 'Ринопластика', price: '250 000 - 350 000 ₽' },
      { name: 'Блефаропластика верхних век', price: '120 000 - 180 000 ₽' },
      { name: 'Блефаропластика нижних век', price: '140 000 - 200 000 ₽' },
      { name: 'Фейслифтинг', price: '400 000 - 600 000 ₽' },
      { name: 'Отопластика', price: '120 000 - 160 000 ₽' }
    ]},
    { category: 'Тело', procedures: [
      { name: 'Маммопластика увеличивающая', price: '320 000 - 450 000 ₽' },
      { name: 'Маммопластика подтягивающая', price: '280 000 - 380 000 ₽' },
      { name: 'Липосакция (1 зона)', price: '80 000 - 150 000 ₽' },
      { name: 'Абдоминопластика', price: '300 000 - 450 000 ₽' },
      { name: 'Брахиопластика', price: '200 000 - 280 000 ₽' }
    ]},
    { category: 'Консультации', procedures: [
      { name: 'Первичная консультация', price: '3 000 ₽' },
      { name: 'Повторная консультация', price: '2 000 ₽' },
      { name: 'Онлайн-консультация', price: '2 500 ₽' }
    ]}
  ];

  const beforeAfter = [
    { id: 1, procedure: 'Ринопластика', duration: '3 месяца' },
    { id: 2, procedure: 'Блефаропластика', duration: '2 месяца' },
    { id: 3, procedure: 'Маммопластика', duration: '6 месяцев' },
    { id: 4, procedure: 'Липосакция', duration: '4 месяца' }
  ];

  const testimonials = [
    {
      name: 'Анна К.',
      procedure: 'Ринопластика',
      rating: 5,
      text: 'Благодарна доктору за профессионализм и внимательное отношение. Результат превзошёл все ожидания, восстановление прошло быстро и комфортно.',
      date: '15.10.2024'
    },
    {
      name: 'Елена М.',
      procedure: 'Блефаропластика',
      rating: 5,
      text: 'Обратилась для омоложения взгляда. Операция прошла отлично, реабилитация была лёгкой. Выгляжу на 10 лет моложе!',
      date: '02.11.2024'
    },
    {
      name: 'Мария С.',
      procedure: 'Маммопластика',
      rating: 5,
      text: 'Долго решалась на операцию, но не пожалела ни секунды. Доктор подобрал идеальный размер, всё выглядит естественно и гармонично.',
      date: '20.09.2024'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-accent" size={28} />
            <span className="text-2xl font-heading font-bold text-primary">Dr. Aesthetic</span>
          </div>
          <ul className="hidden md:flex gap-8 text-sm">
            <li><a href="#services" className="hover:text-accent transition-colors">Услуги</a></li>
            <li><a href="#prices" className="hover:text-accent transition-colors">Прайс</a></li>
            <li><a href="#results" className="hover:text-accent transition-colors">Результаты</a></li>
            <li><a href="#reviews" className="hover:text-accent transition-colors">Отзывы</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
          </ul>
          <Button className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-primary">
            Записаться
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Лицензированная клиника
              </Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
                Искусство пластической хирургии
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Более 15 лет опыта в эстетической медицине. Индивидуальный подход, новейшие технологии и безупречный результат для каждого пациента.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (495) 123-45-67
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-heading font-bold text-accent mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-accent mb-1">2500+</div>
                  <div className="text-sm text-muted-foreground">операций</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-accent mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">довольных пациентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/afc8256e-c9c8-447f-a640-5fb27f293aec/files/c0b4cec2-668c-4c16-a89a-72c0f9b532a9.jpg"
                alt="Пластический хирург"
                className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Наши услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Популярные процедуры
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий спектр операций с использованием современных методик и технологий
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon name={service.icon as any} className="text-accent" size={28} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-lg font-semibold text-accent">{service.price}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-accent">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Стоимость услуг
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Прайс-лист
            </h2>
            <p className="text-lg text-muted-foreground">
              Прозрачная ценовая политика без скрытых платежей
            </p>
          </div>
          <div className="space-y-8">
            {priceList.map((category, index) => (
              <Card key={index} className="border-border/50 overflow-hidden">
                <div className="bg-muted/30 px-8 py-4 border-b border-border">
                  <h3 className="text-2xl font-heading font-bold text-primary">
                    {category.category}
                  </h3>
                </div>
                <CardContent className="p-0">
                  {category.procedures.map((proc, idx) => (
                    <div key={idx} className="px-8 py-5 flex items-center justify-between border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                      <span className="text-foreground font-medium">{proc.name}</span>
                      <span className="text-accent font-semibold">{proc.price}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              <Icon name="Info" size={16} className="inline mr-2" />
              Точная стоимость операции определяется на консультации после осмотра. В цену входит: операция, анестезия, пребывание в стационаре, послеоперационные осмотры.
            </p>
          </div>
        </div>
      </section>

      <section id="results" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Наши работы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Результаты до и после
            </h2>
            <p className="text-lg text-muted-foreground">
              Реальные результаты наших пациентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfter.map((item) => (
              <Card key={item.id} className="overflow-hidden border-border/50 group hover:shadow-xl transition-all duration-300">
                <div className="relative bg-muted/50 h-64 overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 bg-gradient-to-r from-muted to-muted/50 flex items-center justify-center border-r-2 border-accent">
                      <div className="text-center">
                        <Icon name="Image" size={48} className="text-muted-foreground/50 mx-auto mb-2" />
                        <span className="text-sm text-muted-foreground">До операции</span>
                      </div>
                    </div>
                    <div className="w-1/2 bg-gradient-to-l from-muted to-muted/50 flex items-center justify-center">
                      <div className="text-center">
                        <Icon name="Sparkles" size={48} className="text-accent/70 mx-auto mb-2" />
                        <span className="text-sm text-muted-foreground">После операции</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-primary mb-1">
                        {item.procedure}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Результат через {item.duration}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-primary">
                      Смотреть
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Все фотографии публикуются с согласия пациентов
            </p>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              Посмотреть все результаты
            </Button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Отзывы пациентов
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Что говорят наши пациенты
            </h2>
            <p className="text-lg text-muted-foreground">
              Честные отзывы о результатах и качестве обслуживания
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((review, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed italic">
                    "{review.text}"
                  </p>
                  <Separator className="my-4" />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-primary">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.procedure}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{review.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              Читать все отзывы
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Свяжитесь с нами
              </Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Запись на консультацию
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Оставьте заявку, и наш администратор свяжется с вами в ближайшее время для согласования удобного времени приёма.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-accent" size={22} />
                  </div>
                  <div>
                    <div className="font-semibold text-primary mb-1">Адрес клиники</div>
                    <div className="text-muted-foreground">Москва, ул. Пречистенка, д. 24</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-accent" size={22} />
                  </div>
                  <div>
                    <div className="font-semibold text-primary mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-accent" size={22} />
                  </div>
                  <div>
                    <div className="font-semibold text-primary mb-1">График работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:00 - 21:00</div>
                    <div className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-accent" size={22} />
                  </div>
                  <div>
                    <div className="font-semibold text-primary mb-1">Email</div>
                    <div className="text-muted-foreground">info@draesthetic.ru</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Ваше имя
                    </label>
                    <Input
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="border-border"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border-border"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Интересующая процедура
                    </label>
                    <Textarea
                      placeholder="Расскажите, что вас интересует"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-border min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={24} />
                <span className="text-xl font-heading font-bold">Dr. Aesthetic</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Профессиональная пластическая хирургия с заботой о каждом пациенте
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Ринопластика</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блефаропластика</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Маммопластика</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Липосакция</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О клинике</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Врачи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лицензии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@draesthetic.ru</li>
                <li>Москва, ул. Пречистенка, д. 24</li>
              </ul>
            </div>
          </div>
          <Separator className="bg-white/20 mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
            <div>© 2024 Dr. Aesthetic. Все права защищены</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
