<template>
  <!-- qui voglio stampare tutti i 100 film e impaginarli in 4 pagine da 25 -->
  <div>
    <h1>100 movie list</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      movies: []
    }
  },
  mounted() {
    const options = {
      method: 'GET',
      url: 'https://imdb-top-100-movies.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key': 'bcfcce24aemsheb97466671e3b72p1885abjsn227126b7a930',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    }
    axios
      /* perche scritta cosi è sbagliata?
    axios.request(options).then(function (response) {
	this.movies = response.data
}).catch(function (error) {
	console.error(error);
}); */
      .request(options)
      .then((response) => {
        this.movies = response.data
      })
      .catch(function (error) {
        console.error(error)
      })
  }
}
</script>
