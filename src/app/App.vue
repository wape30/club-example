<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <router-link :to="{ name: 'DisplayItem' }" class="navbar-brand">
        Club Elite
      </router-link>
    
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
  <ul class="navbar-nav">
    <li class="nav-item">
      <form class="form-inline" action="/action_page.php">
    <input class="form-control mr-sm-2" type="text" placeholder="Search" >
    <button class="btn btn-success" type="submit">Search</button>
  </form>
    </li>
    <li></li>
  </ul>


      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link :to="{ name: 'CreateItem' }" class="nav-link">
              Create
            </router-link>
          </li>
        </ul>
      </div>
      
    </nav>
    <!-- CONTENT -->
    <div class="col-lg-12">
      <div>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<style>
  .fade-enter-active .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter .fade-leave-active {
    transition: 0;
  }
 
</style>

<script>
  export default {

  }
</script>
