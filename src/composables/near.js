import { ref,onMounted } from "vue";
import {wallet} from '@/services/near'
import {
    getMessages,
    deleteAllMessages,
    sendMessage
  } from "@/services/near";

const accountId = wallet.getAccountId();

export const useMessageBox= () => {
    const myMessages  = ref([])
    const isLoading = ref(false)
    const  err = ref(null)

    onMounted(async () => {
        try {
            isLoading.value=true
            myMessages.value = await getMessages(accountId)
            isLoading.value=false
        } catch (e) {
            err.value = e
            console.log('error')
        }
    })

    
    const handleSendMessage = async ({target_account_id, message}) => {
        isLoading.value=true
        await sendMessage({target_account_id, message})
        myMessages.value = await getMessages(accountId)
        isLoading.value=false
    }

    const handledeleteAllMessages = async () => {
        isLoading.value=true
        await deleteAllMessages()
        myMessages.value = await getMessages(accountId)
        isLoading.value=false
    }

    return {
        isLoading,
        myMessages,
        sendMessage:handleSendMessage,
        deleteAllMessages:handledeleteAllMessages,
    }
}