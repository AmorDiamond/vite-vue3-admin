<!-- <template>
  <div>
    <ElTable v-model="tableData" :data-source="tableData" :page-size="10" :page="1" :total="total">
      {{ columns.map(column => { return (
      <ElTableColumn
        prop="{column.prop}"
        label="{column.label}"
        width="{column.width}"
        align="{column.align}"
        sortable="{column.sortable}"
      >
        12
      </ElTableColumn>
      ) }) }}
    </ElTable>
  </div>
</template> -->
<script lang="tsx">
import { defineComponent, ref } from 'vue'
import { ElPagination, ElTable, ElTableColumn } from 'element-plus'
import { sysApiListApi } from '../../../api/systemAPi'
import { reactive } from 'vue'
export default defineComponent(() => {
  const tableData = ref<any>([])
  const columns = [
    {
      label: '接口名称',
      prop: 'name',
      width: 150,
      align: 'center',
      sortable: true
    },
    {
      label: '接口路径',
      prop: 'path',
      width: 150,
      align: 'center',
      sortable: true
    },
    {
      label: '接口类型',
      prop: 'type',
      width: 150,
      align: 'center',
      sortable: true
    },
    {
      label: '接口描述',
      prop: 'description',
      width: 150,
      align: 'center',
      sortable: true
    },
    {
      label: '接口请求方法',
      prop: 'method',
      width: 150,
      align: 'center',
      sortable: true
    },
    {
      label: '创建时间',
      prop: 'createTime',
      width: 150,
      align: 'center',
      sortable: true
    },
    {
      label: '更新时间',
      prop: 'updateTime',
      width: 150,
      align: 'center',
      sortable: true
    },
    {
      label: '操作',
      prop: 'action',
      width: 150,
      align: 'center',
      sortable: true
    }
  ]
  const total = ref(0)
  const pagination = reactive({
    currentPage: 1,
    pageSize: 10,
    total: 0
  })

  const getList = (params = {}) => {
    sysApiListApi({ page: 1, pageSize: 10, ...params }).then((res) => {
      tableData.value = res.data.list
      pagination.total = res.data.total
      pagination.currentPage = res.data.page
    })
  }
  getList()

  const onCurrentChange = (page: number) => {
    getList({ page })
  }
  const pageProps = {
    small: false,
    background: false,
    pagerCount: 7,
    layout: 'sizes, prev, pager, next, jumper, ->, total',
    pageSizes: [10, 20, 30, 40, 50, 100],
    disabled: false,
    hideOnSinglePage: false
  }
  return () => {
    return (
      <div>
        <ElTable data={tableData.value}>
          {columns.map((column) => {
            return (
              <ElTableColumn
                prop={column.prop}
                label={column.label}
                width={column.width}
                align={column.align}
                sortable={column.sortable}
              ></ElTableColumn>
            )
          })}
        </ElTable>
        <ElPagination
          {...pageProps}
          v-model:pageSize={pagination.pageSize}
          v-model:currentPage={pagination.currentPage}
          total={pagination.total}
          onCurrent-change={onCurrentChange}
        />
      </div>
    )
  }
})
</script>
<style lang=""></style>
