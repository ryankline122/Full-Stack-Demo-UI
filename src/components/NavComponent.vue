<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand px-4" href="#">My App</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink :to="{name: 'home'}" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{name: 'data'}" class="nav-link">Data</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>