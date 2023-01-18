import React from "react";
import { Header, MusicBody,Footer } from "./containers/Index";
import Navbar from './components/navbar/NavBar';
import SlideShow from './components/slideshow/SlideShow'
import './App.css'
export default function App () {
    return(
      <div className="App">
      <div className="gradient__bg">
        ///
      
          <Navbar/>
          <Header/>
        <div className="row">
        <div class="col-2 bg-success">
        // this will be a menubar
        <div className="trove__navbar">
          

        </div>
        </div>

        <div class="col-10 bg-primary">
        <div className="trove__main-div">
      <SlideShow
      imgs={[
        'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=417&q=80',
        'https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
        'https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
        'https://images.unsplash.com/photo-1584753987666-ead137ec0614?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
        'https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
        'https://images.unsplash.com/photo-1585084335487-f653d0859c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
        'https://images.unsplash.com/photo-1583217874534-581393fd5325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
      ]}/>
      <MusicBody/>
      </div>
        </div>
        
      
      
      
      <Footer/>
        
      </div>
      </div>
      </div>
      
    )
  }