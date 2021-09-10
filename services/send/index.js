import axios from "axios";

export default function sendMoneyTransfer (values){
      return request('url', {
          method: 'POST',
          data : JSON.stringify(values)
      })
}