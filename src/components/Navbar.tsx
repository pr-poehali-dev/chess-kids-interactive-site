import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const ChessIcon = () => (
  <div className="text-2xl mr-2">♞</div>
);

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md py-3">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <ChessIcon />
          <span className="text-xl font-bold text-primary font-comic">Шахматная Страна</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              {/* Исправлено - теперь используем NavigationMenuLink напрямую вместо вложения Link в NavigationMenuLink */}
              <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                <Link to="/">Главная</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Начало Игры</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/rules" title="Правила Игры">
                    Узнай, как ходят фигуры и как играть в шахматы.
                  </ListItem>
                  <ListItem href="/pieces" title="Шахматные Фигуры">
                    Познакомься со всеми шахматными фигурами и их возможностями.
                  </ListItem>
                  <ListItem href="/setup" title="Расстановка Доски">
                    Как правильно расставить фигуры перед началом игры.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Учимся Играть</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/lessons" title="Интерактивные Уроки">
                    Интересные уроки для начинающих шахматистов.
                  </ListItem>
                  <ListItem href="/strategy" title="Стратегии">
                    Базовые стратегии для успешной игры.
                  </ListItem>
                  <ListItem href="/puzzles" title="Шахматные Задачи">
                    Решай увлекательные шахматные задачи.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              {/* Исправлено - теперь используем NavigationMenuLink напрямую вместо вложения Link в NavigationMenuLink */}
              <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                <Link to="/contact">Контакты</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
