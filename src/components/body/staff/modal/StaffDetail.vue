
<template>
    <div class="staff-detail-container">
        <a  data-toggle="modal" data-target="#exampleModal">View bio ></a>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="on-title-name">{{ $root.state.stafffName }}</h5>
                        <!-- <span class="modal-title" id="exampleModalLabel"></span> -->
                        <button @click="haddleClose" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body" v-if="$root.state.stafffName !== null && $root.state.staffPosition !== null && $root.state.staffDetail !== null">
                        <div class="image-profile-container">
                            <img width="80" height="80" src="../../../.././assets/user.png"/>
                        </div>
                        <div class="profile-container">
                            <div class="profile-position">
                                <h5>{{ $root.state.staffPosition }}</h5>
                            </div>
                            <div class="setting-user-address">
                                <div class="profile-detail">
                                    <h6 class="contact-detail">Address:</h6>
                                    <p class="info-contact">{{  $root.state.staffDetail.address  }}</p>
                                </div>
                                <hr>
                                <div class="profile-detail">
                                    <h6 class="contact-detail">Tel:</h6>
                                    <p class="info-contact">{{  $root.state.staffDetail.tel  }}</p>
                                </div>
                                <hr>
                                <div class="profile-detail">
                                    <h6 class="contact-detail">Email:</h6>
                                    <p class="info-contact">{{  $root.state.staffDetail.email  }}</p>
                                </div>
                            </div>
                            <div class="staff-desc">
                                <h5>description</h5>
                                <p>Null</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body" v-if="$root.state.stafffName === null || $root.state.staffPosition === null || $root.state.staffDetail === null">
                        <div class="image-profile-container">
                            <h4>Loading...</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            staffAddress:{
                address: null,
                tel: null,
                email: null,
                desc: null
            }
        }
    },
    methods:{
        haddleClose(){
            this.$root.state.staffImgPath = null,
            this.$root.state.stafffName = null, 
            this.$root.state.staffPosition = null,
            this.$root.state.staffDetail = null 
        }
    }
}
</script>

<style  scoped>
    .profile-detail{
        display: grid;
        grid-template-columns: 1fr 2fr;
        text-align: left;
        margin-left: 2rem;
    }
    .on-title-name{
        text-align: center;
        margin: auto;
        padding-left: 1rem;
    }
    .setting-user-address{
        padding-top: 1rem;
        padding-bottom: 1rem;
        border: 1px solid rgb(165, 165, 165);
        border-radius: 28px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .staff-detail-container > a{
        text-decoration: none;
        color: #009CFF;
    }

    .close{
        border: none;
        background: none;
    }
    .image-profile-container{
        text-align: center;
        margin-bottom: 2rem;
    }
    .profile-position{
        margin-bottom: 3rem;
    }
    .staff-desc{
        margin-top: 2rem;
    }

 

</style>

 