import axios from "axios";

export default function add (values){
      return request('url', {
          method: 'POST',
          data : JSON.stringify(values)
      })
}