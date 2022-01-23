<template>
    <div class="staff-container">
        <div class="staff-content">
            <div class="title-container">
                <div class="title-content">
                    <h4>ทีมงาน</h4>
                </div>
                <div class="title-desc">
                    <h6>Detail description</h6>
                </div>
            </div>
            <div class="set-staff-container">
                <div class="staff-member-container" v-if="menuChange === '0'">
                    <div class="staff-content">
                        <div class="img-container">
                            <div class="test-img"></div>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >Member name1</h6>
                            <button @click="haddleProfile('1')"><StaffDetail/></button>
                            <!-- <p>View bio ></p> -->
                        </div>
                    </div>
                    <div class="staff-content">
                        <div class="img-container">
                            <div class="test-img"></div>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >Member name2</h6>
                            <button @click="haddleProfile('2')"><StaffDetail/></button>
                        </div>
                    </div>
                    <div class="staff-content">
                        <div class="img-container">
                            <div class="test-img"></div>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >Member name3</h6>
                            <button @click="haddleProfile('3')"><StaffDetail/></button>
                        </div>
                    </div>
                    <div class="staff-content">
                        <div class="img-container">
                            <div class="test-img"></div>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >Member name4</h6>
                          <button @click="haddleProfile('4')"><StaffDetail/></button>
                        </div>
                    </div>
                </div>
                <div class="staff-member-container" v-if="menuChange === '1'">
                    <div class="staff-content">
                        <div class="img-container">
                            <div class="test-img"></div>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >Member name5</h6>
                            <button @click="haddleProfile('5')"><StaffDetail/></button>
                        </div>
                    </div>
                    <div class="staff-content">
                        <div class="img-container">
                            <div class="test-img"></div>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >Member name6</h6>
                            <button @click="haddleProfile('6')"><StaffDetail/></button>
                        </div>
                    </div>
                    <div class="staff-content">
                        <div class="img-container">
                            <div class="test-img"></div>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >Member name7</h6>
                            <button @click="haddleProfile('7')"><StaffDetail/></button>
                        </div>
                    </div>
                    <div class="staff-content">
                        <div class="img-container">
                            <div class="test-img"></div>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >Member name8</h6>
                            <button @click="haddleProfile('8')"><StaffDetail/></button>
                        </div>
                    </div>
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
                this.$root.state.staffImgPath = null,
                this.$root.state.stafffName = "TEST user 1"
                this.$root.state.staffPosition = "Position test 1"
                this.$root.state.staffDetail = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
            else if(param === "2"){
                this.$root.state.staffImgPath = null,
                this.$root.state.stafffName = "TEST user 2"
                this.$root.state.staffPosition = "Position test 2"
                this.$root.state.staffDetail = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."        
            }
            else if(param === "3"){
                this.$root.state.staffImgPath = null,
                this.$root.state.stafffName = "TEST user 3"
                this.$root.state.staffPosition = "Position test 3"
                this.$root.state.staffDetail = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."        
            }
            else if(param === "4"){
                this.$root.state.staffImgPath = null,
                this.$root.state.stafffName = "TEST user 4"
                this.$root.state.staffPosition = "Position test 4"
                this.$root.state.staffDetail = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."        
            }
            else if(param === "5"){
                this.$root.state.staffImgPath = null,
                this.$root.state.stafffName = "TEST user 5"
                this.$root.state.staffPosition = "Position test 5"
                this.$root.state.staffDetail = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."        
            }
            else if(param === "6"){
                this.$root.state.staffImgPath = null,
                this.$root.state.stafffName = "TEST user 6"
                this.$root.state.staffPosition = "Position test 6"
                this.$root.state.staffDetail = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."        
            }
            else if(param === "7"){
                this.$root.state.staffImgPath = null,
                this.$root.state.stafffName = "TEST user 7"
                this.$root.state.staffPosition = "Position test 7"
                this.$root.state.staffDetail = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."        
            }
            else if(param === "8"){
                this.$root.state.staffImgPath = null,
                this.$root.state.stafffName = "TEST user 8"
                this.$root.state.staffPosition = "Position test 8"
                this.$root.state.staffDetail = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."        
            }
        }
    }
}
</script>

<style scoped>

.staff-detail > button{
    background: none;
    border: none;
}

@media screen and (min-width: 1800px){
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

@media only screen and (max-width: 990px){
    .staff-member-container{
        margin-top: 39px;
    }
    .test-img{
        background-color: #F4F4F4;
        width: 130px;
        height: 85px;
        margin: auto;
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
</style>