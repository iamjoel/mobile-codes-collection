<template>
  <div class="address">
    <van-radio-group
      v-model="selectedId"
      class="full"
      v-if="list && list.length > 0"
      @change="select"
    >
      <div class="address__item ly ly-m" v-for="(item, i) in list" :key="i">
        <van-radio
          v-if="!isUserCenter"
          :name="item.id"
          style="flex-shrink: 0;margin-right: 10px"
        />
        <div class="address__info">
          <div class="ly ly-m">
            <strong class="address__name">{{ item.name }}</strong>
            <span class="address__tel">{{ item.tel }}</span>
            <span v-if="item.isDefault" class="default-tag">默认</span>
          </div>
          <div class="address__detail ">
            {{ item.province }} {{ item.city }} {{ item.county }}
            {{ item.addressDetail }}
          </div>
        </div>
        <div class="address__op" v-if="isUserCenter">
          <a
            class="address__edit-btn"
            href="javascript:void(0);"
            @click="edit(item)"
            >编辑</a
          >
        </div>
      </div>
    </van-radio-group>
    <div v-else class="no-data">
      暂无地址数据
    </div>
    <div class="p-20">
      <van-button type="primary" size="large" @click="add">新增地址</van-button>
    </div>
    <van-popup v-model="show" position="top" class="pop_container">
      <van-address-edit
        :area-list="areaList"
        show-set-default
        show-search-result
        show-delete
        :address-info="addressInfo"
        @save="save"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>
