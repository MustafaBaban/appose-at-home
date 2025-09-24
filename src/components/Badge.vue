<template>
    <div class="badge" :class="badgeClass">
        {{ name }}
    </div>
</template>

<script>
export default {
    name: "Badge",
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    computed: {
        badgeClass() {
            return this.name.toLowerCase() === "employee"
                ? "badge-blue"
                : this.name.toLowerCase() === "manager"
                    ? "badge-orange"
                    : "badge-green";
        },
    },
};
</script>

<style scoped>
.badge {
    display: inline-flex;
    /* inline pill */
    align-items: center;
    /* vertical center */
    gap: 6px;
    /* space between dot + text */
    background-color: #f4f4f5;
    color: #3f3f46;
    font-weight: 500;
    line-height: 18px;
    border-radius: 25px;
    padding-block: 2px;
    padding-inline: 8px;
    font-size: 12px;
}

/* pseudo-element circle */
.badge::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

/* color variations */
.badge-blue::before {
    background-color: #3b82f6;
    /* blue */
}

.badge-orange::before {
    background-color: #f97316;
    /* orange */
}

.badge-green::before {
    background-color: #16B364;
    /* default */
}
</style>
