<template>
    <div class="roles">
        <div class="roles__content">
            <accordion>
                <accordion-item label="View only" title="Precoro">
                    <div class="roles__inner">
                        <div class="roles-access">
                            <div class="roles-headings">
                                <div class="roles-headings__caption">Access to:</div>
                                <ul class="roles-headings__list">
                                    <li class="roles-headings__item roles-headings__item_type_bold">All bellow</li>
                                    <li class="roles-headings__item">Warehouse requests</li>
                                    <li class="roles-headings__item">Purchase requests</li>
                                    <li class="roles-headings__item">Request for proposals</li>
                                    <li class="roles-headings__item">Purchase orders</li>
                                    <li class="roles-headings__item">Receipts</li>
                                    <li class="roles-headings__item">Invoices</li>
                                    <li class="roles-headings__item">Expenses</li>
                                </ul>
                            </div>
                            <div class="roles-content">
                                <div class="roles-content__heading">
                                    <div class="roles-content__caption">View only</div>
                                    <div class="roles-content__caption">Create</div>
                                    <div class="roles-content__caption">Approve</div>
                                    <div class="roles-content__caption">Pay</div>
                                </div>
                                <div class="roles-content__body">
                                    <div class="roles-content__row">
                                        <div class="roles-content__cell">
                                            <form-checkbox id="all-bellow-access" name="all-bellow-access" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="all-bellow-create" name="all-bellow-create" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="all-bellow-approve" name="all-bellow-approve" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="all-bellow-pay" name="all-bellow-pay" :disabled="disabled"></form-checkbox>
                                        </div>
                                    </div>
                                    <div class="roles-content__row">
                                        <div class="roles-content__cell">
                                            <form-checkbox id="warehouse-access" name="warehouse-access" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="warehouse-create" name="warehouse-create" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="warehouse-approve" name="warehouse-approve" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="warehouse-pay" name="warehouse-pay" :disabled="disabled"></form-checkbox>
                                        </div>
                                    </div>
                                    <div class="roles-content__row">
                                        <div class="roles-content__cell">
                                            <form-checkbox id="purchase-access" name="purchase-access" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="purchase-create" name="purchase-create" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="purchase-approve" name="purchase-approve" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="purchase-pay" name="purchase-pay" :disabled="disabled"></form-checkbox>
                                        </div>
                                    </div>
                                    <div class="roles-content__row">
                                        <div class="roles-content__cell">
                                            <form-checkbox id="proposals-access" name="proposals-access" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="proposals-create" name="proposals-create" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="proposals-approve" name="proposals-approve" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="proposals-pay" name="proposals-pay" :disabled="disabled"></form-checkbox>
                                        </div>
                                    </div>
                                    <div class="roles-content__row">
                                        <div class="roles-content__cell">
                                            <form-checkbox id="purchase-orders-access" name="purchase-orders-access" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="purchase-orders-create" name="purchase-orders-create" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="purchase-orders-approve" name="purchase-orders-approve" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="purchase-orders-pay" name="purchase-orders-pay" :disabled="disabled"></form-checkbox>
                                        </div>
                                    </div>
                                    <div class="roles-content__row">
                                        <div class="roles-content__cell">
                                            <form-checkbox id="receipts-access" name="receipts-access" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="receipts-create" name="receipts-create" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="receipts-approve" name="receipts-approve" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="receipts-pay" name="receipts-pay" :disabled="disabled"></form-checkbox>
                                        </div>
                                    </div>
                                    <div class="roles-content__row">
                                        <div class="roles-content__cell">
                                            <form-checkbox id="invoices-access" name="invoices-access" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="invoices-create" name="invoices-create" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="invoices-approve" name="invoices-approve" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="invoices-pay" name="invoices-pay" :disabled="disabled"></form-checkbox>
                                        </div>
                                    </div>
                                    <div class="roles-content__row">
                                        <div class="roles-content__cell">
                                            <form-checkbox id="expenses-access" name="expenses-access" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="expenses-create" name="expenses-create" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="expenses-approve" name="expenses-approve" :disabled="disabled"></form-checkbox>
                                        </div>
                                        <div class="roles-content__cell">
                                            <form-checkbox id="expenses-pay" name="expenses-pay" :disabled="disabled"></form-checkbox>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="roles-management">
                            <div class="roles-management__heading">
                                Management:
                                <icon-info></icon-info>
                            </div>
                            <div class="roles-management__content">
                                <ul class="roles-management__list">
                                    <li class="roles-management__item roles-management__item_type_bold">
                                        <form-row-checkbox id="all-bellow-management" label="All bellow" name="all-bellow-management" :disabled="disabled"></form-row-checkbox>
                                    </li>
                                    <li class="roles-management__item">
                                        <form-row-checkbox id="configuration" label="Configuration" name="configuration" :disabled="disabled"></form-row-checkbox>
                                    </li>
                                    <li class="roles-management__item">
                                        <form-row-checkbox id="suppliers" label="Suppliers and items" name="suppliers" :disabled="disabled"></form-row-checkbox>
                                    </li>
                                    <li class="roles-management__item">
                                        <form-row-checkbox id="budgets" label="Budgets" name="budgets" :disabled="disabled"></form-row-checkbox>
                                    </li>
                                    <li class="roles-management__item">
                                        <form-row-checkbox id="warehouse" label="Warehouse manager" name="warehouse" :disabled="disabled"></form-row-checkbox>
                                    </li>
                                    <li class="roles-management__item roles-management__item_type_absolute roles-management__item_with_icon">
                                        <form-row-checkbox id="admin" label="Admin (Full access)" name="admin" :disabled="disabled"></form-row-checkbox>
                                        <icon-warning></icon-warning>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="roles__notification">
                        <notification>
                            The user becomes a <span class="notification__content_color_blue">Power user</span> if at least ONE of the following roles is selected. Approve, View only, Configuration, Suppliers and Items, Budgets, Warehouse manager.
                        </notification>
                    </div>
                </accordion-item>
                <accordion-item label="Create, Approve" title="Precoro Development">
                    test content => ...
                </accordion-item>
                <accordion-item label="Admin (Full Access)" title="Procurement">
                    test content => ...
                </accordion-item>
            </accordion>
        </div>
        <div class="roles__actions">
            <the-button size="medium" color="blue" @click="handleSubmit">Invite User</the-button>
        </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'

import IconInfo from '../icons/IconInfo'
import IconWarning from '../icons/IconWarning'

export default {
    components: {
        IconInfo,
        IconWarning
    },
    methods: {
        handleSubmit() {
            this.$store.dispatch('HANDLE_DISABLE_INPUTS_ACTION')
            this.$store.dispatch('HANDLE_CONFIRM_DOCS_ROLES_ACTION')
        }
    },
    computed: {
        ...mapGetters ({
            disabled: 'getInputState'
        })
    }
}
</script>

<style scoped lang="scss">
.roles {
    &__content {
        padding: 24px;
        border-bottom: 1px solid #DDDEE5;
    }

    &__actions {
        padding: 24px;
        display: flex;
        justify-content: flex-end;
    }

    &__inner {
        margin-bottom: 24px;
        display: flex;
    }
}

.roles-access {
    display: flex;
    gap: 24px;
    width: 60%;
    padding-right: 24px;
    border-right: 1px solid #DDDEE5;
}

.roles-management {
    width: 40%;
    padding: 0 24px;
}

.roles-headings {
    width: 170px;

    &__caption {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        color: #676F8F
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__item {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: #1D2452;

        &_type {
            &_bold {
                font-weight: 600;
            }
        }
    }
}

.roles-content {
    width: calc(100% - 170px - 24px);

    &__heading {
        display: flex;
        margin-bottom: 20px;
    }

    &__caption {
        width: 100%;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: #676F8F;
        text-align: center;
        white-space: nowrap;
    }

    &__row {
        display: flex;
        align-items: center;
        height: 24px;

        & + .roles-content__row {
            margin-top: 16px;
        }
    }

    &__cell {
        width: 100%;
        display: flex;
        justify-content: center;
    }
}

.roles-management {
    &__heading {
        display: flex;
        gap: 4px;
        align-items: center;
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        color: #676F8F
    }

    &__content {}

    &__list {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__item {
        &_type {
            &_absolute {
                position: absolute;
                bottom: -120px;
            }
        }

        &_with {
            &_icon {
                display: flex;
                align-items: center;
                gap: 16px;
            }
        }
    }
}
</style>