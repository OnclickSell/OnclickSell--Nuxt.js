<template>
    <div class='profile__item'>
            <div class='l-profile__image'>
                <img class='profile__image' src='http://res.cloudinary.com/onclicksell-com/image/upload/v1513505162/OnclickSell.com/Icons/Onclicksell.com-avatar-male-64px.svg' alt='Aliakbar"s photo'>
                <div class='profile__name'>Aliakbar Sultani</div>
            </div>
    
            <div class='l-profile__description'>
                <p class='profile__description'>
                    Born on May 14, 1984, in White Plains, New York, Mark Zuckerberg co-founded the social-networking website Facebook out of his college dorm room. He left Harvard after his sophomore year to concentrate on the site, the user base of which has grown to more than 250 million people, making Zuckerberg a billionaire.
                </p>
                <div class='profile__join'>Joined since: 20/10/2017</div>
            </div>
    </div>
</template>
<script>
</script>

<style lang='scss'>
@import '../../Shared/assets/CSS-Layout-system.scss';
@import '../../Shared/assets/OnclickSell.com--css--config.scss';


.l-profile__image {
    width: 100%;
    text-align: center;
    margin-top: 60px;
}

.profile__image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid #8CB662;
    margin: auto;
}

.profile__name {
    padding: 12px;
    color: #666666;
}

.l-profile__description {
    text-align: center;
    @include layout--container;
}

.profile__description {
    padding: 12px;
    @include layout--item;
    @include layout--item--offset(1, 2);
    width: layout--item--width(1, 10, false);
    font-size: 0.9em;
    color: #666666;
    text-align: left;
}

.profile__join {
    font-size: 0.9em;
    color: #666666;
    text-align: left;
    padding: 12px;
    @include layout--item;
    @include layout--item--offset(1, 2);
    width: layout--item--width(1, 10, false);
}

</style>