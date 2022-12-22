<template>
    <header class="header">
        <div class="header-layout">
            <div class="header__heading">
                <div class="header__title">Invite User</div>
            </div>
            <div class="header__content">
                <div class="header-navigation">
                    <router-link to="/main" class="header-navigation__item" :class="getNavigationState.isMainInfoConfirmed ? 'header-navigation__item-confirmed' : ''">
                        <div class="header-navigation__icon">
                            <span v-if="!getNavigationState.isMainInfoConfirmed">1</span>
                        </div>
                        <div class="header-navigation__title">Main Info</div>
                    </router-link>
                    <router-link to="/locations" class="header-navigation__item" :class="getNavigationState.isLocationsConfirmed ? 'header-navigation__item-confirmed' : ''">
                        <div class="header-navigation__icon">
                            <span v-if="!getNavigationState.isLocationsConfirmed">2</span>
                        </div>
                        <div class="header-navigation__title">Available Locations</div>
                    </router-link>
                    <router-link to="/docs" class="header-navigation__item" :class="getNavigationState.isDocsConfirmed ? 'header-navigation__item-confirmed' : ''">
                        <div class="header-navigation__icon">
                            <span v-if="!getNavigationState.isDocsConfirmed">3</span>
                        </div>
                        <div class="header-navigation__title">Available Documents Custom Fields</div>
                    </router-link>
                    <router-link to="/roles" class="header-navigation__item" :class="getNavigationState.isRolesConfirmed ? 'header-navigation__item-confirmed' : ''">
                        <div class="header-navigation__icon">
                            <span v-if="!getNavigationState.isRolesConfirmed">4</span>
                        </div>
                        <div class="header-navigation__title">Roles</div>
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            getNavigationState: 'getNavigationState'
        })
    }
}
</script>

<style scoped lang="scss">
.header {
    border-bottom: 1px solid rgba(#000, .1);

    &__heading {
        margin-bottom: 14px;
    }

    &__title {
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
        color: #1D2452;
    }
}

.header-navigation {
    margin-bottom: 20px;
    display: flex;
    gap: 24px;

    &__item{
        position: relative;
        display: flex;
        align-items: center;
        gap: 8px;

        &.router-link-active {
            &:after {
                content: '';
                display: block;
                height: 2px;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -20px;
                background: #415ADA;
            }

            .header-navigation__icon,
            .header-navigation__title {
                color: #415ADA;
            }
        }
    }

    &__item {
        &-confirmed {
            .header-navigation__icon {
                background-image: url('../../assets/builder/checked.svg');
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: 12px 10px;
                background-color: #415ADA;
            }
        }
    }

    &__icon {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(#415ADA0D, .05);
        border-radius: 50%;
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        color: #5E6A75;
    }

    &__title {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: rgba(#1D2452, .5);
    }
}

.header-layout {
    padding: 24px 24px 0 24px;
}

</style>