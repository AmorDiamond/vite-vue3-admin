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
import { ElLoading, ElPagination, ElTable, ElTableColumn } from 'element-plus'
import { sysApiListApi } from '../../../api/systemAPi'
import { reactive } from 'vue'
import { BaseButton } from '@/components/Button'
import { t } from '@/hooks/web/useI18n'
import { useRouter } from 'vue-router'
export default defineComponent(() => {
  const { push } = useRouter()
  const tableData = ref<any>([])
  const tableRef = ref<HTMLElement | undefined>(undefined)
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
      // width: 150,
      align: 'center'
    },
    {
      label: '接口类型',
      prop: 'type',
      width: 150,
      align: 'center'
    },
    {
      label: '接口描述',
      prop: 'description',
      width: 150,
      align: 'center'
    },
    {
      label: '接口请求方法',
      prop: 'method',
      width: 150,
      align: 'center'
    },
    {
      label: '创建时间',
      prop: 'createTime',
      width: 150,
      align: 'center'
    },
    {
      label: '更新时间',
      prop: 'updateTime',
      width: 150,
      align: 'center'
    },
    {
      label: '操作',
      prop: 'action',
      width: 250,
      align: 'center',
      slots: {
        default: (data: any) => {
          return (
            <>
              {/* <ElLink href={`/sysApi/list/${data.row.ID}`}>{t('exampleDemo.detail')}</ElLink> */}
              <BaseButton type="primary" onClick={() => action(data.row, 'edit')}>
                {t('exampleDemo.edit')}
              </BaseButton>
              <BaseButton type="success" onClick={() => action(data.row, 'detail')}>
                {t('exampleDemo.detail')}
              </BaseButton>
              <BaseButton type="danger" onClick={() => delData(data.row)}>
                {t('exampleDemo.del')}
              </BaseButton>
            </>
          )
        }
      }
    }
  ]

  const pagination = reactive({
    currentPage: 1,
    pageSize: 10,
    total: 0
  })

  const getList = (params = {}) => {
    const elLoading = ElLoading.service({
      fullscreen: false,
      target: tableRef.value
      // lock: true,
      // text: 'Loading',
      // spinner: 'el-icon-loading',
      // background: 'rgba(0, 0, 0, 0.7)'
    })
    sysApiListApi({ page: 1, pageSize: 10, ...params })
      .then((res) => {
        tableData.value = res.data.list
        pagination.total = res.data.total
        pagination.currentPage = res.data.page
      })
      .finally(() => {
        elLoading.close()
      })
  }
  getList()

  const onCurrentChange = (page: number) => {
    getList({ page })
  }

  const action = (row: any, type: string) => {
    console.log(row, type)
    push(`/sysApi/list/${row.ID}`)
  }

  const delData = (row: any) => {
    console.log(row)
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
        <div ref={tableRef}>
          <ElTable data={tableData.value} width={'100%'}>
            {columns.map((column) => {
              return (
                <ElTableColumn
                  prop={column.prop}
                  label={column.label}
                  width={column.width}
                  align={column.align}
                  sortable={column.sortable}
                >
                  {{ default: column.slots?.default }}
                </ElTableColumn>
              )
            })}
          </ElTable>
        </div>
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
