import type { Component } from 'solid-js';

import Button, { TypeThin } from '../../components/button/Button';
import Link from '../../components/link/Link';
import Container from '../../components/container/Container';
import Logo from '../../components/logo/Logo';

import './Home.css';

import search from './../../assets/icons/search.svg';
import phone from './../../assets/icons/phone.png';
import ChatMessage, { OrientationMessage } from '../../components/chatMessage/chatMessage';

const App: Component = () => {
  return (
    <>
      <header>
        <Container class="py-1.5">
          <div class='h-[70px] flex justify-between items-center'>
            <Logo/>
            <nav class='flex xl:gap-[30px] gap-3.5'>
              <Link href='#'>О проекте</Link>
              <Link href='#'>Планы и релизы</Link>
              <Link href='#'>Документация</Link>
              <Link href='#'>Сотрудничество</Link>
            </nav>
            <Button class='' thin={TypeThin.thin}>Войти</Button>
          </div>
        </Container>
      </header>
      <main class='mt-[140px]'>
        <Container>
          <div class='flex flex-col items-center'>
            <h1>Система для будущего ваших финансов</h1>
            <p class='mt-5 text-center max-w-[464px]'>
              <span class='font-medium'>M</span>oney
              <span class='font-medium'>C</span>ushion 
              - функциональная и современная система учёта и анализа личных финансов и бюджета семьи
            </p>
            
            <div class='mt-[60px]'>
              <Button class='w-[300px]'>Зарегистрироваться</Button>
              <span class='ml-5'>
                <Button class='w-[300px]'>Узнать больше</Button>
              </span>
            </div>
            <p class='light mt-4'>*я старался над документацией, советую почитать</p>
          </div>
        </Container>
        <div class='bg-black text-white w-full mt-[200px] pb-[80px] pt-10'>
          <Container>
            <h2 class='text-center mb-[80px]'>ОСОБЕННОСТИ</h2>
            <div class='px-10'>
              <div class='flex justify-between h-max'>
                <div class='xl:w-[386px] w-60 xl:h-[386px] h-60 rounded-[10px] bg-gray-300'></div>
                <div class='text-right xl:h-[386px] h-[100%] max-w-[50%]'>
                  <h3>Минималистичный дизайн</h3>
                  <div class='h-[85%] flex items-center'>
                    <p class='h-max'>Использую базовые цвета - чёрный и белый...<br/><br/>

                    Мне наскучили яркие цвета в интерфейсах приложений,   поэтому я выбрал минималистичный стиль.<br/><br/>

                    Пожалуйста, дайте дизайну шанс, и вы увидите, насколько он хорош.
                  </p>
                  </div>
                </div>
              </div>
            </div>
            <div class='px-10 mt-[60px]'>
              <div class='flex justify-between h-max'>
                <div class='xl:w-[386px] w-60 xl:h-[386px] h-60 rounded-[10px] bg-gray-300'></div>
                <div class='text-right xl:h-[386px] h-[100%] max-w-[50%]'>
                  <h3>Реалистичный функционал</h3>
                  <div class='h-[85%] flex items-center'>
                    <p class='h-max'>Функции в приложении добавлены на основе реальной деятельности, которую я совершаю ежедневно<br/><br/>

                    Счета (ваши карточки), операции, категории расходов - всё это здесь имеется в приближенном к реальности формате...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class='px-10 mt-[60px]'>
              <div class='flex justify-between h-max'>
                <div class='xl:w-[386px] w-60 xl:h-[386px] h-60 rounded-[10px] bg-gray-300'></div>
                <div class='text-right xl:h-[386px] h-[100%] max-w-[50%]'>
                  <h3>Сотрудничество</h3>
                  <div class='h-[85%] flex flex-col justify-evenly'>
                    <p class='h-max'>Предложения, сформулированную критику, прочие формы интереса к проекту и желания помочь прошу направлять на следующие контакты:
                    </p>
                    <div class='flex gap-5 justify-end'>
                      <span><Button class='w-[162px]' dark>Email</Button></span>
                      <span><Button class='w-[162px]' dark>ТГК</Button></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Container class='mt-[120px]'>
          <h2 class='text-center'>А ИДЕЯ...</h2>
          <div class='mt-[80px]'>
            <div class='flex justify-between rounded-t-[10px] bg-black px-[10px] py-[7px]'>
              <h4 class='text-white text-lg font-montserrat font-medium'>Разработчик</h4>
              <span class='flex gap-[10px]'>
                <img width={30} height={30} src={search}/>
                <img width={30} height={30} src={phone}/>
                <span class='w-[30px] h-[30px] flex flex-col gap-[3px] items-center justify-center'>
                  <div class='w-[5px] h-[5px] bg-white rounded-full'/>
                  <div class='w-[5px] h-[5px] bg-white rounded-full'/>
                  <div class='w-[5px] h-[5px] bg-white rounded-full'/>
                </span>
              </span>
            </div>
            <div class='w-full border border-black rounded-b-[10px] py-[40px]'>
              <div class='w-full flex flex-col gap-[10px]'>
                <ChatMessage orientation={OrientationMessage.right}>
                  Привет!
                </ChatMessage>
                <ChatMessage orientation={OrientationMessage.right}>
                  Поделишься:<br/>”Как ты пришёл к тому, что хочешь реализовать данный проект?”
                </ChatMessage>
                <ChatMessage orientation={OrientationMessage.left}>
                  В ведении домашней бухгалтерии я уже более 5 лет и прошёл путь от клочка бумаги с записаными тратами, до создания собственной книги в Excel
                </ChatMessage>
                <ChatMessage orientation={OrientationMessage.left}>
                  Несмотря на мобильность бумаги и свободу творчества в Excel, варианта, который бы меня устроил, не было :(
                </ChatMessage>
                <ChatMessage orientation={OrientationMessage.right}>
                  И ты придумал то, что тебя устроит?
                </ChatMessage>
                <ChatMessage orientation={OrientationMessage.left}>
                  Верно!
                </ChatMessage>
                <ChatMessage orientation={OrientationMessage.left}>
                  Если кратко, то я аккумулировал свои опыт и знания, чтобы создать ту систему, которая “на ура” решает мои задачи ведения домашней бухгалтерии
                </ChatMessage>
              </div>
              <div class='w-full flex justify-center mt-[60px]'>
                <div class='flex gap-[10px]'>
                  <span class='w-4 h-4 bg-black rounded-full'/>
                  <span class='w-4 h-4 bg-black rounded-full'/>
                  <span class='w-4 h-4 bg-black rounded-full'/>
                </div>
              </div>
              <div class='w-full flex justify-center mt-[30px]'>
                <Button class='w-[300px]'>Узнать больше</Button>
              </div>
            </div>
          </div>
        </Container>
        <Container class='mt-[120px]'>
          <h2>КАКОЙ-ТО ТЕКСТ</h2>
        </Container>
      </main>
    </>
  );
};

export default App;
