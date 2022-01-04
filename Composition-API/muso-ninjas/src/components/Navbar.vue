<template>
  <div class="navbar">
      <nav>
          <img src="@/assets/ninja.png">
          <h1><router-link :to="{name: 'Home'}">Muso Ninjas</router-link></h1>
          <div class="links">
              <button v-if="user" @click="handleSubmit">Logout</button>
              <router-link v-if="!user" class="btn" :to="{ name: 'Signup'}">Signup!</router-link>
              <router-link v-if="!user" class="btn" :to="{ name: 'Login'}">Log in!</router-link>
          </div>
      </nav>
  </div>
</template>

<script>
// Challenge
//   - only show the log out button if user is logged in
//   - only show the signup button if not logged in
//   -use the getUser composable to help


import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'

export default {
    setup(){
        //gets everything from useLogout()
        const { logout, error } = useLogout()
        //gets everything from getUser()
        const { user } = getUser()
        const router = useRouter()

        const handleSubmit = async () =>{
            await logout()
            console.log("User has logged out.")
            router.push({ name: 'Login'})
        }


        return { handleSubmit, user }
    }
}
</script>

<style scoped>
    .navbar{
        padding: 16px 10px;
        margin-bottom: 60px;
        background: white;
    }
    nav{
        display: flex;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
    }
    nav h1{
        margin-left: 20px;
    }
    nav .links{
        /* moves it to the right */
        margin-left: auto;
    }
    nav .links a, button{
        margin-left: 16px;
        font-size: 14px;
    }
    nav img{
        max-height: 60px;
    }
</style>