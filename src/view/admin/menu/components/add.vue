<template>
    <el-dialog v-model="addVisible" :title="info == undefined ? '新增' : '修改'" width="30%" :before-close="handleClose">
        <el-form :model="form" label-width="120px" class="form" :rules="rules" ref="ruleFormRef">
            <el-form-item label="菜单路由" prop="index">
                <el-input v-model="form.index" />
            </el-form-item>
            <el-form-item label="菜单名称" prop="name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="文件路径" prop="filePath">
                <el-input v-model="form.filePath" />
            </el-form-item>
            <el-form-item label="父级菜单" prop="parentId">
                <el-tree-select :props="{ value: 'id', label: 'name', children: 'children' }" v-model="form.parentId"
                    :data="treedata" check-strictly />
            </el-form-item>
            <el-form-item label="菜单顺序" prop="order">
                <el-input v-model="form.order" />
            </el-form-item>
            <el-form-item label="是否启用" prop="isEnable">
                <el-switch v-model="form.isEnable" />
            </el-form-item>
            <el-form-item label="描述" prop="description">
                <el-input v-model="form.description" />
            </el-form-item>
            <!-- 按钮操作组 -->
            <el-form-item class="btn">
                <el-button type="primary" @click="submit(ruleFormRef)">确定</el-button>
                <el-button @click="close(ruleFormRef)">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, defineProps, defineEmits } from 'vue'
import { MenuModel } from '../class/MenuModel'
import type { FormRules, FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>();

const props = defineProps({
    addVisible: Boolean,
    info: MenuModel
})
const treedata = ref([])
const form = ref({
    id: props.info?.id,
    index: '',
    name: '',
    filePath: '',
    parentId: 0,
    order: 99,
    isEnable: false,
    description: ""
})

const rules = reactive<FormRules>({
    name: [{ required: true, message: '请输入名称', trigger: 'blur' }]
})

//defineEmits用于定义回调事件，里面是数组，可以定义多个事件
const emits = defineEmits(["CloseAdd"]);

const handleClose = () => {
    emits("CloseAdd");
}
const submit = (ruleFormRef: FormInstance | undefined) => {
    if (!ruleFormRef) return;
    ruleFormRef.resetFields();
    emits("CloseAdd");

}
const close = (ruleFormRef: FormInstance | undefined) => {
    if (!ruleFormRef) return;
    ruleFormRef.resetFields();
    emits("CloseAdd");
}
</script>