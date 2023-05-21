export default function filterfunc(filter) {
    return function (anime) {
      return (
        anime.title.toLowerCase().includes(filter.toLowerCase()) 
      )
    }
  }