import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ChessBoard from "@/components/ChessBoard";
import ChessLesson from "@/components/ChessLesson";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const FeatureCard = ({ title, description, icon, linkTo }: { 
  title: string; 
  description: string; 
  icon: string;
  linkTo: string;
}) => (
  <Card className="hover-scale">
    <CardContent className="p-6">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={linkTo}>
        <Button variant="outline" className="w-full">
          Перейти <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </Link>
    </CardContent>
  </Card>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-chess-primary/10 to-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-2 animate-bounce-small">♞</span>
                <h1 className="text-4xl md:text-5xl font-bold text-primary font-comic">
                  Шахматная Страна
                </h1>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Увлекательный мир шахмат для детей!
                Научись играть, развивай логику и стратегическое мышление в игровой форме.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-chess-secondary hover:bg-chess-secondary/90">
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline">
                  Узнать правила
                </Button>
              </div>
            </div>
            <div>
              <div className="p-3 bg-white rounded-xl shadow-lg">
                <ChessBoard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary font-comic">
            Что ждёт тебя в Шахматной Стране?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              title="Правила игры"
              description="Узнай, как ходят фигуры и правила игры в шахматы в доступной форме."
              icon="♟️"
              linkTo="/rules"
            />
            <FeatureCard
              title="Стратегии"
              description="Изучи базовые приёмы и стратегии, которые помогут побеждать."
              icon="♚"
              linkTo="/strategy"
            />
            <FeatureCard
              title="Интерактивные уроки"
              description="Практикуйся в увлекательных интерактивных уроках и задачах."
              icon="♕"
              linkTo="/lessons"
            />
          </div>
        </div>
      </section>

      {/* Sample Lesson */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary font-comic">
            Пример урока
          </h2>
          <ChessLesson
            title="Как ходит конь"
            description="Конь — единственная фигура, которая может перепрыгивать через другие фигуры!"
            position="8/8/8/8/3N4/8/8/8"
            steps={[
              "Конь ходит буквой 'Г': на две клетки по вертикали и одну по горизонтали, или две по горизонтали и одну по вертикали.",
              "Конь может перепрыгивать через другие фигуры — это его суперспособность!",
              "На пустой доске конь из центра может пойти на 8 разных клеток."
            ]}
          />
          <div className="text-center mt-8">
            <Button size="lg" className="bg-chess-secondary hover:bg-chess-secondary/90">
              Все уроки
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-4">⭐</div>
            <p className="text-xl italic text-gray-600 mb-4">
              "Мой ребёнок обожает эти уроки шахмат! Всего за месяц он научился играть и даже иногда побеждает меня!"
            </p>
            <p className="font-medium">- Мама юного шахматиста</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-chess-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4 font-comic">Готов начать увлекательное путешествие в мир шахмат?</h2>
          <p className="text-xl mb-8">Присоединяйся к тысячам детей, которые уже научились играть в шахматы!</p>
          <Button size="lg" className="bg-white text-chess-primary hover:bg-gray-100">
            Начать бесплатно
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
