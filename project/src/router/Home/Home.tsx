import type { Component } from 'solid-js';

import Button, { TypeThin } from '../../components/button/Button';
import Link from '../../components/link/Link';
import Container from '../../components/container/Container';
import Logo from '../../components/logo/Logo';
import ChatMessage, { OrientationMessage } from '../../components/chatMessage/chatMessage';

import './Home.css';

import search from './../../assets/icons/search.svg';
import phone from './../../assets/icons/phone.png';

import tg from './../../assets/icons/telegram.svg';
import vk from './../../assets/icons/vk.svg';

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
        <Container class='mt-[120px] text-center'>
          <h2>КАКОЙ-ТО ТЕКСТ</h2>
          <p class='w-3/4 mx-auto mt-[30px]'>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
          </p>
        </Container>
        <div class='bg-black text-white w-full mt-[120px] pb-[60px] pt-10'>
          <Container>
            <h2 class='text-center mb-[80px] font-raleway'>ПЛАНЫ</h2>
            <div class='flex justify-between items-center'>
                <label>Настоящий этап:</label>
                <h4 class='text-right font-montserrat'>
                  <span class='font-medium text-2xl'>MVP</span><br/>
                  (минимально жизнеспособный продукт)
                </h4>
            </div>
            <div class='relative mt-[120px]'>
              <div class='w-full h-[4px] bg-white rounded-full'/>
              <div class='w-[80px] h-[80px] rounded-full bg-white absolute -top-[38px] left-[8.34%]'/>
            </div>
            <div class='mt-[60px] font-montserrat xl:w-1/2 w-3/4'>
              <p>
                Сейчас <b>разрабатывается минимальный продукт</b> для тестирования.<br/>
                Он будет включать в себя:
              </p>
              <ul class='list-disc list-inside ml-4'>
                <li>веб-сайт проекта ✓</li>
                <li>мобильное приложение ✗</li>
                <li>серверное приложение ✗</li>
              </ul>
              <p class='mt-4'>
                <b>Главное направление</b> данного этапа - реализация идеи и всего, что нужно для её поддержания.
              </p>
            </div>
            <div class='mt-[60px] flex justify-center'>
              <Button class='w-[300px]' dark>Подробнее</Button>
            </div>
          </Container>
        </div>
        <Container class='mt-[120px] text-center'>
          <h2>СОТРУДНИЧЕСТВО</h2>
          <div class='flex gap-[20px] items-center w-full mt-[60px]'>
            <div class='w-1/2 flex flex-col items-center'>
              <p class='xl:w-[80%]'>
                Предложения, сформулированную критику, прочие формы интереса к проекту и желания помочь прошу направлять с помощью формы справа или на следующие контакты:
              </p>
              <div class='mt-[60px] flex gap-5 justify-center'>
                <span><Button class='w-[162px]'>Email</Button></span>
                <span><Button class='w-[162px]'>ТГК</Button></span>
              </div>
            </div>
            <div class='w-1/2 flex'>
              <form class='w-full border border-black rounded-[10px] xl:p-[32px] p-[16px]'>
                <input placeholder='Ваше имя' class='w-full border border-black rounded-[8px] p-[8px] pb-[6px]'/>
                <input placeholder='Email или ник в ТГ (для обратной связи)' class='xl:mt-[24px] mt-[14px] w-full border border-black rounded-[8px] p-[8px] pb-[6px]'/>
                <textarea placeholder='Текст' class='xl:mt-[24px] mt-[14px] w-full min-h-[160px] border border-black rounded-[8px] p-[8px] pb-[6px]'/>
                <Button thin={TypeThin.full_thin} class='xl:mt-[20px] mt-[10px] w-[340px]'>Отправить</Button>
              </form>
            </div>
          </div>
        </Container>
      </main>
      <footer class='mt-[120px] bg-black text-white w-full pt-10 pb-[30px]'>
        <Container>
          <div class='grid grid-cols-3'>
            <div>
              <h4 class='font-raleway text-base font-medium mr-auto'>Социальные сети разработчика:</h4>
              <div class='flex xl:gap-5 gap-4 mt-[10px]'>
                <img width={40} height={40} src={tg}/>
                <img width={40} height={40} src={vk}/>
              </div>
            </div>
            <div class='flex flex-col items-center mx-auto'>
              <h4 class='font-raleway text-base font-medium'>Социальные сети проекта:</h4>
              <div class='flex xl:gap-5 gap-4 mt-[10px]'>
                <img width={40} height={40} src={tg}/>
                <img width={40} height={40} src={vk}/>
              </div>
            </div>
            <p class='text-sm font-montserrat text-center ml-auto'>
              *очередная<br/>
              домашняя<br/>
              бухгалтерия<br/>
            </p>
          </div>
          <p class='mt-[60px] font-raleway text-center'>© 2025 Булыгин В.Е.</p>
        </Container>
      </footer>
    </>
  );
};

export default App;
