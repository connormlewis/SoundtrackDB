import * as $ from "jquery";

var API_URL = 'http://localhost'
if (process.env.NODE_ENV === "production") {
  API_URL = 'http://api.soundtrackdb.me'
}

export default class ApiService {

  static getArtists(offset = 0, limit = 12, searchTerm = null, filters = {}, orderBy=null) {
    let params = {
      offset: offset,
      limit: limit
    };
    if (searchTerm != null) {
      params.search = searchTerm;
    }
    if (filters != null) {
      for (let filter in filters) {
        params[filter] = filters[filter]; 
      }
    }
    if (orderBy != null) {
      params.order_by = orderBy.field
      if (orderBy.direction === 'asc') {
        params.asc = true
      } else {
        params.desc = true
      }
    }
    return $.ajax({
      url: API_URL + '/artist',
      type: "get",
      data: params
    })
  }

  static getAlbums(offset = 0, limit = 12, searchTerm = null, filters = {}, orderBy=null) {
    let params = {
      offset: offset,
      limit: limit
    };
    if (searchTerm != null) {
      params.search = searchTerm;
    }
    if (filters != null) {
      for (let filter in filters) {
        params[filter] = filters[filter]; 
      }
    }
    if (orderBy != null) {
      params.order_by = orderBy.field
      if (orderBy.direction === 'asc') {
        params.asc = true
      } else {
        params.desc = true
      }
    }
    return $.ajax({
      url: API_URL + '/album',
      type: "get",
      data: params
    })
  }

  static getAllMedia(offset = 0, limit = 12, searchTerm = null, filters = {}, orderBy=null) {
    let params = {
      offset: offset,
      limit: limit
    };
    if (searchTerm != null) {
      params.search = searchTerm;
    }
    if (filters != null) {
      for (let filter in filters) {
        params[filter] = filters[filter]; 
      }
    }
    if (orderBy != null) {
      params.order_by = orderBy.field
      if (orderBy.direction === 'asc') {
        params.asc = true
      } else {
        params.desc = true
      }
    }
    return $.ajax({
      url: API_URL + '/media',
      type: "get",
      data: params
    })
  }

  static getArtist(id) {
    return $.get(API_URL + '/artist/' + id)
  }

  static getAlbum(id) {
    return $.get(API_URL + '/album/' + id)
  }

  static getMedia(id) {
    return $.get(API_URL + '/media/' + id)
  }

  static getAbout() {
    return $.get(API_URL + '/about')
  }

  static getSearchResults(query, offset = 0, limit = 10, orderBy=null, filters={}) {
    console.log(filters)
    var params = Object.assign({
      offset: offset,
      limit: limit
    }, filters);
    Object.keys(params).forEach((key) => (params[key] == null) && delete params[key]);
    return $.ajax({
      url: API_URL + '/search/' + query,
      type: 'get',
      data: params
    })
  }

  static getGenres() {
    return $.ajax({
      url: API_URL + '/genres',
      type: 'get',
      data: {
        limit: 200
      }
    })
  }
}
