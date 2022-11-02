<template>
  <div>
    <h3>My Coupons</h3>
    <a-table :dataSource="data" :columns="columns">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'deal'">  
            {{ record.deal.title}} - {{record.deal.offer}}{{record.deal.is_percentage?'%':'AED'}}
        </template>
        <template v-if="column.key === 'company'">  
            {{ record.deal.company.name}} | {{ record.deal.company.city}}
        </template>
        <template v-if="column.key === 'expire_at'">  
            {{ moment(record.expire_at).format('LL')}} 
        </template>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";
import moment from "moment";

// eslint-disable-next-line no-undef
const props = defineProps(["data"]);

const columns = [
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
  },

  {
    title: "Deal",
    dataIndex: "deal",
    key: "deal",
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "Expire at",
    dataIndex: "expire_at",
    key: "expire_at",
  },
];

const { data } = toRefs(props);
</script>
