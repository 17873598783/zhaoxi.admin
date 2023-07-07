<template>
    <el-dialog v-model="addVisible" :title="info == undefined ? '新增' : '修改'" width="30%" :before-close="handleClose">
        <el-form :model="form" label-width="120px" class="form" :rules="rules" ref="ruleFormRef">
            <el-form-item label="名称" prop="name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="描述" prop="desc">
                <el-input v-model="form.desc" />
            </el-form-item>
            <el-form-item label="菜单顺序" prop="order">
                <el-input v-model="form.order" />
            </el-form-item>
            <el-form-item label="是否启用" prop="isEnable">
                <el-switch v-model="form.isEnable" />
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
import { ref, defineProps, defineEmits, reactive } from 'vue'
import { RoleModel } from '../class/RoleModel'
import type { FormRules, FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>();

const props = defineProps({
    addVisible: Boolean,
    info: RoleModel
})

const form = ref({
    id: 0,
    name: '',
    desc: '',
    order: 99,
    isEnable: false
})

const rules = reactive<FormRules>({
    name: [{ required: true, message: '请输入名称', trigger: 'blur' }]
})

//defineEmits用于定义回调事件，里面是数组，可以定义多个事件
const emits = defineEmits(["CloseAdd"])

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