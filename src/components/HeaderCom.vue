<template>
    <el-row>
        <el-col :span="12">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><a href="/">
                        <el-icon>
                            <house />
                        </el-icon>首页
                    </a></el-breadcrumb-item>
                <el-breadcrumb-item>桌面</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-col :span="12">
            <div class="dropdown">
                <el-avatar :size="30" :src="circleUrl" />
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <!-- {{ NickName }} -->
                        张三
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>
                                <el-link :underline="false"><span @click="goToPerson">个人主页</span></el-link>
                            </el-dropdown-item>
                            <el-dropdown-item><span>退出</span></el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <el-tag v-for="tag in tags" :key="tag.name" class="mx-1" closable :type="tag.type"
                :disable-transitions="false" @close="handleClose(tag)">
                {{ tag.name }}
            </el-tag>
        </el-col>
    </el-row>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const circleUrl = ref('/images/Person.jpg')
const NickName = ref()
const router = useRouter();
const tags = ref([
    { name: 'Tag 1', type: '' },
    { name: 'Tag 2', type: 'success' },
    { name: 'Tag 3', type: 'info' },
    { name: 'Tag 4', type: 'warning' },
    { name: 'Tag 5', type: 'danger' },
])
const handleClose = (tag:any) => {
    tags.value.splice(tags.value.indexOf(tag), 1)
}
onMounted(() => {
    NickName.value = useStore().state.NickName
})
const goToPerson = () => {
    router.push({ path: "/person" })
}

</script>
<style lang="scss" scoped>
.el-header {
    .el-col {
        height: 50px;
        line-height: 50px;

        .el-breadcrumb {
            line-height: inherit;
        }

        .el-icon {
            margin-right: 5px;
        }

        .el-divider {
            margin: 0;
        }
    }
}
</style>