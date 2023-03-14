import React from 'react';

import { Link } from 'react-router-dom';

import logo from './img/gpt-logo.png'
import logoSlide from './img/logo.png'

import './Home.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';

function Home () {
  return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>

    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
    <SwiperSlide>
      <div className='test'>
        <img src={logoSlide} className="logo-slide" alt="#" />
        </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className='test'>
        <h2>
        ChatGPT, que significa transformador pré-treinado gerador de conversas, é um protótipo de um chatbot com inteligência artificial desenvolvido pela OpenAI e especializado em diálogo. O chatbot é um modelo de linguagem ajustado com técnicas de aprendizado supervisionado e por reforço.
        </h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='test'>
      <img src={logoSlide} className="logo-slide" alt="#" />
      </div>
      </SwiperSlide>
    
    </Swiper>

    <div className='pre-footer'>
      <h3>
        Use esse link para ter acesse a nossa API do ChatGPT, e poder conversar com a inteligência artificial.
      </h3>
      <p>Confira o 
        {/* <Link to={'/About'} >ChatGPT</Link> */}
      .</p> 
    </div>

    <div className='footer'>
      <div className='credito'>
      <p className='linha'>Um projeto Merlim</p>
      <h1>Créditos</h1>
      <span>Autor: Igor Merlim</span> <br/><br/>
      <span className='text2'>Sobre o autor:<br/> Aluno da Universidade de Vassouras, segundo período em Eng. de Software.<br/> <br/> Acesse eu portifolio para ver meus trabalhos e projetos. <br/> <p>Confira o <a href="https://github.com/merlimigor?tab=overview&from=2023-01-01&to=2023-01-31" target="#" >Portifólio</a>.</p> </span>
      </div>
    </div>

  </div>
  )
}

export default Home;
