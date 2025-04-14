import type { Component } from 'solid-js';

import Button, { TypeThin } from '../../components/button/Button';
import Link from '../../components/link/Link';
import Container from '../../components/container/Container';
import Logo from '../../components/logo/Logo';

import './Home.css';

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
              <Button class='w-[300px] ml-5'>Узнать больше</Button>
            </div>
            <p class='light mt-4'>*я старался над документацией, советую почитать</p>
          </div>
        </Container>
        <div class='bg-black w-full mt-[200px] pt-10'>
          <Container>
            <h2 class='text-white text-center'>ОСОБЕННОСТИ</h2>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
