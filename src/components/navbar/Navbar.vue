<template>
    <div class="navbar-container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><img width="150" height="70" src="../.././assets/tai.png"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#is-set-feature">ฟีเจอร์การใช้งาน</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#is-set-mission">พันธกิจ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#is-set-staff" >ทีมงาน</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#is-set-contact">ติดต่อเรา</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-link{
    font-size: 27px;
}
@media only screen and (min-width: 990px){
    .navbar-brand{
        margin-left: 60px;
    }
    .collapse{
        text-align: left;
    }
    .navbar-nav{
        position: absolute;
        right: 0;
        margin-right: 60px;
    }
    .nav-item{
        width: 13rem;
        text-align: right;
    }
}

@media only screen and (max-width: 990px){
    .navbar-brand{
        margin-left: 2rem;
    }
    .navbar-toggler{
        margin-right: 2rem;
    }
    .nav-item{
        text-align: right;
        margin-right: 2.5rem;
    }
}



</style>