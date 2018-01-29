const headers = {
  "Accept":"application/json",
  "Content-Type":"application/json",
  "Authorization": 'token'
}

class Base {
  constructor() {
    this.root = 'https://ws.fanteam.com'
  }

  load(params,route){
    let endpoint = `${this.root}/${route}`
    let qs = {...{}, params} //not used yet
      //https://ws.fanteam.com/books?real_match_id=115909&is_exchange=false
    return fetch(endpoint, {headers, method:'GET'}).then(res => res.json())
  }
}

export default new Base();
