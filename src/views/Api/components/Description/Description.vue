<script lang="tsx">
import { ElDescriptions, ElDescriptionsItem } from 'element-plus'
// import { descriptionProps } from 'element-plus'
import { IColumn } from './Index'
import { PropType, defineComponent } from 'vue'
import { ref } from 'vue'
// const descProps = defineProps(descriptionProps)
export default defineComponent({
  extends: ElDescriptions,
  props: {
    // ...descriptionProps,
    columns: {
      type: Array as PropType<IColumn[]>,
      default: () => [],
      required: true
    },
    data: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  setup(props) {
    console.log(12 + 'desc setup', props, this)
    return () => {
      return (
        <div>
          {[1, 2].map((item) => item).join(', ')}
          <ElDescriptions {...props}>
            {props.columns.map((item) => (
              <ElDescriptionsItem label={item.label}>{props.data[item.prop]}</ElDescriptionsItem>
            ))}
          </ElDescriptions>
        </div>
      )
    }
  },
  data() {
    const count = ref(0)
    return {
      count
    }
  },
  mounted() {
    console.log(123 + 'mounted', this.columns)
  },
  methods: {
    handleClick() {
      this.count++
    }
  }
})
</script>
