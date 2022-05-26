<template>
<div id="app">

  <Header />
  
  <Home />
  <Footer/>

</div>
 
</template>

<script>

import './styles/global.css';
import Header  from './componentes/Header';
import Home from './pages/Home';
import Footer from './componentes/footer';

export default {
  name: 'App',
  components: {
   Header,
   Home,
   Footer
  }
}
</script>


