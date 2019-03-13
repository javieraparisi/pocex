<script>
import store from '@/store/store';
import guidLib from '@/libs/guidLib';
import Promise from 'Promise';
import { setTimeout } from 'timers';

export default {
    show() {
        const self = this;
        let guid = guidLib.generateUUID(); 
        self.spinners = self.spinners || [];
        self.spinners.push(guid);
        
        setTimeout(()=>{
            if (self.spinners.length==0) store.commit('establecerSpinner',true);
        },0);
        return guid;    
    },
    hide(guid){
        const self=this;
        self.spinners = self.spinners || [];
        var index = self.spinners.indexOf(guid);
        if (index > -1) {
            self.spinners.splice(index, 1);
        }
        if (self.spinners.length==0) store.commit('establecerSpinner',false);
    }
}
</script>
