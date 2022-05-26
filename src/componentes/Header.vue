<template>
    <header>
        <nav class="container">
            <a href="/"><img alt="WDEV" id="logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"></a>
      

        <img  alt="Abrir menu" id="menu-button" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg">

        <div id="menu-overlay"></div>

        <div id="menu-items">

            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/videos">Video</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
        </div>
  </nav>

    </header>
</template>

<script>
export default{
    name:'Header'
}
</script>

 
<style scoped>
header{
    background-color: var(--color-background-nav);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav{
    display: flex;
    justify-content: space-between;
}

#logo{
    width: 130px;
}

#menu-button{
    width: 30px;
}

#menu-overlay{
    position: fixed;
    top:0;
    left:0;
    width: 40%;
    height: 100vh;
    background-color: black;
    opacity: 0.8;
}
</style>