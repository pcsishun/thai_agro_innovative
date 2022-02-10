<template>
    <div class="staff-container">
        <div class="staff-content">
            <div class="title-container">
                <div class="title-content">
                    <h4>ทีมงาน</h4>
                </div>
                <div class="title-desc">
                    <!-- <h6>Detail description</h6> -->
                </div>
            </div>
            <div class="set-staff-container">
                <div class="staff-member-container" v-if="menuChange === '0'">
                    <div class="staff-content">
                        <div class="img-container">
                            <img class="test-img" src="../../../assets/avatar_unname.jpg"/>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6>{{ $root.state.staff.Thantakorn.name }}</h6>
                            <button @click="haddleProfile('1')"><StaffDetail/></button>
                            <!-- <p>View bio ></p> -->
                        </div>
                    </div>
                    <div class="staff-content">
                        <div class="img-container">
                            <img class="test-img" src="../../../assets/avatar_unname.jpg"/>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >{{ $root.state.staff.Rawipas.name }}</h6>
                            <button @click="haddleProfile('2')"><StaffDetail/></button>
                        </div>
                    </div>
                    <div class="staff-content">
                        <div class="img-container">
                            <img class="test-img" src="../../../assets/avatar_unname.jpg"/>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >{{ $root.state.staff.Tawan.name }}</h6>
                            <button @click="haddleProfile('3')"><StaffDetail/></button>
                        </div>
                    </div>
                    <div class="staff-content">
                        <div class="img-container">
                           <img class="test-img" src="../../../assets/avatar_unname.jpg"/>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >{{ $root.state.staff.Natta.name }}</h6>
                          <button @click="haddleProfile('4')"><StaffDetail/></button>
                        </div>
                    </div>
                </div>
                <div class="staff-member-container" v-if="menuChange === '1'">
                    <div class="staff-content">
                        <div class="img-container">
                            <img class="test-img" src="../../../assets/avatar_unname.jpg"/>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >{{ $root.state.staff.Joseph.name }}</h6>
                            <button @click="haddleProfile('5')"><StaffDetail/></button>
                        </div>
                    </div>
                    <div class="staff-content">
                        <div class="img-container">
                            <img class="test-img" src="../../../assets/avatar_unname.jpg"/>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >{{ $root.state.staff.Thanapol.name }}</h6>
                            <button @click="haddleProfile('6')"><StaffDetail/></button>
                        </div>
                    </div>
                    <div class="staff-content">
                        <div class="img-container">
                            <img class="test-img" src="../../../assets/avatar_unname.jpg"/>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >{{ $root.state.staff.Sorrakrit.name }}</h6>
                            <button @click="haddleProfile('7')"><StaffDetail/></button>
                        </div>
                    </div>
                    <!-- <div class="staff-content">
                        <div class="img-container">
                            <div class="test-img"></div>
            
                        </div>
                        <div class="staff-detail">
                            <h6 >Member name8</h6>
                            <button @click="haddleProfile('8')"><StaffDetail/></button>
                        </div>
                    </div> -->
                </div>
                <div class="btn-silder">
                     <button class="dot" @click="haddleChange('0')"></button>
                    <button class="dot" @click="haddleChange('1')"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StaffDetail from './modal/StaffDetail.vue'

export default {
    components:{
        StaffDetail
    },
    data(){
        return{
            menuChange: '0'
        }
    },
    methods:{
        haddleChange(param){
            if(param === '0'){
                this.menuChange = '0';
            }else if(param === '1'){
                this.menuChange = '1';
            }
        },
        haddleProfile(param){
            if(param === "1"){
                const contactStaff = {
                    address: this.$root.state.staff.Thantakorn.address,
                    tel: this.$root.state.staff.Thantakorn.tel,
                    email: this.$root.state.staff.Thantakorn.email,
                    desc: this.$root.state.staff.Thantakorn.desc
                };
                this.$root.state.staffImgPath = null,
                this.$root.state.stafffName =  this.$root.state.staff.Thantakorn.name;
                this.$root.state.staffPosition = this.$root.state.staff.Thantakorn.position;
                this.$root.state.staffDetail = contactStaff;
            }
            else if(param === "2"){
                const contactStaff = {
                    address: this.$root.state.staff.Rawipas.address,
                    tel: this.$root.state.staff.Rawipas.tel,
                    email: this.$root.state.staff.Rawipas.email,
                    desc: this.$root.state.staff.Rawipas.desc
                };
                this.$root.state.staffImgPath = null,
                this.$root.state.stafffName =  this.$root.state.staff.Rawipas.name;
                this.$root.state.staffPosition = this.$root.state.staff.Rawipas.position;
                this.$root.state.staffDetail = contactStaff; 
            }
            else if(param === "3"){
                const contactStaff = {
                    address: this.$root.state.staff.Tawan.address,
                    tel: this.$root.state.staff.Tawan.tel,
                    email: this.$root.state.staff.Tawan.email,
                    desc: this.$root.state.staff.Tawan.desc
                };
                this.$root.state.staffImgPath = null,
                this.$root.state.stafffName =  this.$root.state.staff.Tawan.name;
                this.$root.state.staffPosition = this.$root.state.staff.Tawan.position;
                this.$root.state.staffDetail = contactStaff;    
            }
            else if(param === "4"){
                const contactStaff = {
                    address: this.$root.state.staff.Natta.address,
                    tel: this.$root.state.staff.Natta.tel,
                    email: this.$root.state.staff.Natta.email,
                    desc: this.$root.state.staff.Natta.desc
                };
                this.$root.state.staffImgPath = null,
                this.$root.state.stafffName =  this.$root.state.staff.Natta.name;
                this.$root.state.staffPosition = this.$root.state.staff.Natta.position;
                this.$root.state.staffDetail = contactStaff; 
            }
            else if(param === "5"){
                const contactStaff = {
                    address: this.$root.state.staff.Joseph.address,
                    tel: this.$root.state.staff.Joseph.tel,
                    email: this.$root.state.staff.Joseph.email,
                    desc: this.$root.state.staff.Joseph.desc
                };
                this.$root.state.staffImgPath = null,
                this.$root.state.stafffName =  this.$root.state.staff.Joseph.name;
                this.$root.state.staffPosition = this.$root.state.staff.Joseph.position;
                this.$root.state.staffDetail = contactStaff;      
            }
            else if(param === "6"){
                const contactStaff = {
                    address: this.$root.state.staff.Thanapol.address,
                    tel: this.$root.state.staff.Thanapol.tel,
                    email: this.$root.state.staff.Thanapol.email,
                    desc: this.$root.state.staff.Thanapol.desc
                };
                this.$root.state.staffImgPath = null,
                this.$root.state.stafffName =  this.$root.state.staff.Thanapol.name;
                this.$root.state.staffPosition = this.$root.state.staff.Thanapol.position;
                this.$root.state.staffDetail = contactStaff;  
            }
            else if(param === "7"){
                const contactStaff = {
                    address: this.$root.state.staff.Sorrakrit.address,
                    tel: this.$root.state.staff.Sorrakrit.tel,
                    email: this.$root.state.staff.Sorrakrit.email,
                    desc: this.$root.state.staff.Sorrakrit.desc
                };
                this.$root.state.staffImgPath = null,
                this.$root.state.stafffName =  this.$root.state.staff.Sorrakrit.name;
                this.$root.state.staffPosition = this.$root.state.staff.Sorrakrit.position;
                this.$root.state.staffDetail = contactStaff;     
            }
            // else if(param === "8"){
            //     const contactStaff = {
            //         address: this.$root.state.Thantakorn.address,
            //         tel: this.$root.state.Thantakorn.tel,
            //         email: this.$root.state.Thantakorn.email,
            //         desc: this.$root.state.Thantakorn.desc
            //     };
            //     this.$root.state.staffImgPath = null,
            //     this.$root.state.stafffName =  this.$root.state.Thantakorn.name;
            //     this.$root.state.staffPosition = this.$root.state.Thantakorn.position;
            //     this.$root.state.staffDetail = contactStaff; 
            // }
        }
    }
}
</script>

<style scoped>

.staff-detail > button{
    background: none;
    border: none;
}
@media screen and (min-width: 3501px){
    .staff-member-container{
        margin-top: 39px;
    }
    .test-img{
        background-color: #F4F4F4;
        width: 660px;
        height: 420px;
    }
    .staff-member-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .staff-detail > h6{
        margin-top: 20px
    }
    .staff-detail > p{
        color: #009CFF;
    }
    .btn-silder{
        margin-top: 1rem;
        text-align: center;
    }
    .dot {
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
    .dot:hover{
        background-color: rgb(128, 128, 128);
    }
}
@media screen and (min-width: 3000px) and (max-width: 3500px){
    .staff-member-container{
        margin-top: 39px;
    }
    .test-img{
        background-color: #F4F4F4;
        width: 560px;
        height: 390px;
    }
    .staff-member-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .staff-detail > h6{
        margin-top: 20px
    }
    .staff-detail > p{
        color: #009CFF;
    }
    .btn-silder{
        margin-top: 1rem;
        text-align: center;
    }
    .dot {
        height: 25px;
        width: 25px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        margin-left: 10px;
        margin-right: 10px;
        border: none;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
    .dot:hover{
        background-color: rgb(128, 128, 128);
    }
}
@media screen and (min-width: 2500px) and (max-width: 3000px){
        .staff-member-container{
        margin-top: 39px;
    }
    .test-img{
        background-color: #F4F4F4;
        width: 450px;
        height: 320px;
    }
    .staff-member-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .staff-detail > h6{
        margin-top: 20px
    }
    .staff-detail > p{
        color: #009CFF;
    }
    .btn-silder{
        margin-top: 1rem;
        text-align: center;
    }
    .dot {
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
    .dot:hover{
        background-color: rgb(128, 128, 128);
    }
}
@media screen and (min-width: 2001px) and (max-width: 2500px){
    .staff-member-container{
        margin-top: 39px;
    }
    .test-img{
        background-color: #F4F4F4;
        width: 360px;
        height: 270px;
    }
    .staff-member-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .staff-detail > h6{
        margin-top: 20px
    }
    .staff-detail > p{
        color: #009CFF;
    }
    .btn-silder{
        margin-top: 1rem;
        text-align: center;
    }
    .dot {
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
    .dot:hover{
        background-color: rgb(128, 128, 128);
    }
}
@media screen and (min-width: 1800px) and (max-width: 2000px){
    .staff-member-container{
        margin-top: 39px;
    }
    .test-img{
        width: 340px;
        height: 270px;
    }
    .staff-member-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .staff-detail > h6{
        margin-top: 20px
    }
    .staff-detail > p{
        color: #009CFF;
    }
    .btn-silder{
        margin-top: 1rem;
        text-align: center;
    }
    .dot {
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
    .dot:hover{
        background-color: rgb(128, 128, 128);
    }
}

@media  screen and (min-width: 990px) and (max-width: 1800px){
    .staff-member-container{
        margin-top: 39px;
    }
    .test-img{
        background-color: #F4F4F4;
        width: 260px;
        height: 173px;
    }
    .staff-member-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 1rem;
    }
    .staff-detail > h6{
        margin-top: 20px
    }
    .staff-detail > p{
        color: #009CFF;
    }
    .btn-silder{
        margin-top: 1rem;
        text-align: center;
    }
    .dot {
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
    .dot:hover{
        background-color: rgb(128, 128, 128);
    }
}
@media only screen and (min-width: 601px) and (max-width: 989px){
 .staff-member-container{
        margin-top: 39px;
    }
    .test-img{
        background-color: #F4F4F4;
        width: 290px;
        height: 185px;
        margin: auto;
    }
    .staff-content{
        margin-top: 1rem;
    }
    .staff-detail > h6{
        margin-top: 20px
    }
    .staff-detail > p{
        color: #009CFF;
    }
    .staff-member-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1rem;
        text-align: center;
    }
    .dot {
        height: 25px;
        width: 25px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        margin-left: 10px;
        margin-right: 10px;
        border: none;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
    .dot:hover{
        background-color: rgb(128, 128, 128);
    }
}
@media only screen and (max-width: 600px){
    .staff-member-container{
        margin-top: 39px;
    }
    .staff-content{
        margin-top: 1rem;
    }
    .test-img{
        background-color: #F4F4F4;
        width: 290px;
        height: 185px;
        border-radius: 8px;
        margin: auto;
    }
    .staff-detail > h6{
        margin-top: 20px
    }
    .staff-detail > p{
        color: #009CFF;
    }
    .staff-member-container{
        text-align: center;
    }
    .btn-silder{
        margin-top: 2rem;
    }
    .dot {
        height: 25px;
        width: 25px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        margin-left: 10px;
        margin-right: 10px;
        border: none;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
    .dot:hover{
        background-color: rgb(128, 128, 128);
    }
}
</style>