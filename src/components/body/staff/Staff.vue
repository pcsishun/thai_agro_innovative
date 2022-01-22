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
                            <h6 >Member name</h6>
                            <p>View bio ></p>
                        </div>
                    </div>
                    <div class="staff-content">
                        <div class="img-container">
                            <div class="test-img"></div>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >Member name</h6>
                            <p>View bio ></p>
                        </div>
                    </div>
                    <div class="staff-content">
                        <div class="img-container">
                            <div class="test-img"></div>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >Member name</h6>
                            <p>View bio ></p>
                        </div>
                    </div>
                    <div class="staff-content">
                        <div class="img-container">
                            <div class="test-img"></div>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >Member name</h6>
                            <p>View bio ></p>
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
                            <h6 >Member name2</h6>
                            <p>View bio ></p>
                        </div>
                    </div>
                    <div class="staff-content">
                        <div class="img-container">
                            <div class="test-img"></div>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >Member name2</h6>
                            <p>View bio ></p>
                        </div>
                    </div>
                    <div class="staff-content">
                        <div class="img-container">
                            <div class="test-img"></div>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >Member name2</h6>
                            <p>View bio ></p>
                        </div>
                    </div>
                    <div class="staff-content">
                        <div class="img-container">
                            <div class="test-img"></div>
                            <!-- <img/> -->
                        </div>
                        <div class="staff-detail">
                            <h6 >Member name2</h6>
                            <p>View bio ></p>
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
export default {
    data(){
        return{
            staffData: ["member1","member2","member3","member4","member5","member6",],
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
        }
    }
}
</script>

<style scoped>
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