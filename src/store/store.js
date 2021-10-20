import { createStore } from 'vuex'
import { wallet} from "@/services/near";

//init store
const store = createStore({
    state () {
      return {
        accountId: wallet.getAccountId()
      }
    }
  })

  export  default store