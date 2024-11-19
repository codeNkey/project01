<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/test">Test</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/render">Extra</router-link> |
    <router-link to="/custom">Advenced</router-link> 
  </nav> -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" @click="goToMenu('/')">Heejin-Bar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" @click="goToMenu('/')">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToMenu('/test')">Test</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" @click="goToMenu('/render')">Extra</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Reuse
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"  ></a></li>
            <li><a class="dropdown-item" @click="goToMenu('/slot')">Slot</a></li>
            <li><hr class="dropdown-divider"></li> 
            <li><a class="dropdown-item" @click="goToMenu('/root')">Root</a></li>
            <li><hr class="dropdown-divider"></li> 
            <li><a class="dropdown-item" @click="goToMenu('/mix')">MixIn</a></li>
          </ul>
        </li>
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Advenced
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"  ></a></li>
            <li><a class="dropdown-item" @click="goToMenu('/plug')">plug</a></li>
            
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<footer>
    
</footer>
</template>

<script>
export default {
    methods: {
        goToMenu(path) {
            this.$router.push({path: path})
        }
    },
}
</script>

<style scoped>
a {
    cursor: pointer;
}    
</style>