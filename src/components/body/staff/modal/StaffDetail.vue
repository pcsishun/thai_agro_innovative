
<template>
    <div class="staff-detail-container">
        <a  data-toggle="modal" data-target="#exampleModal">View bio ></a>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ $root.state.stafffName }}</h5>
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
                            <div class="profile-detail">
                                <p>{{ $root.state.staffDetail }}</p>
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

 

</style>

 