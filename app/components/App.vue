<template>
    <Page>
        <ActionBar title="DropDown Demo for NativeScript-Vue!"/>
        <Stacklayout padding="10">
          <WrapLayout>
            <label text="Select an option:   " class="message" textWrap="true" />
            <Stacklayout width="200" borderColor="#53ba82" borderRadius="20" borderWidth="1">
                <DropDown horizontalAlignment="center" class="message" :items="options" @selectedIndexChanged="onChange($event)" @opened="onOpen()" @closed="onClose()" selectedIndex="0"></DropDown>
            </Stacklayout>
          </WrapLayout>
          <label :text="`You selected: ${selection}`" marginTop="20" class="message"/>
        </Stacklayout>
    </Page>
</template>

<script >
  export default {
    data() {
      return {
        options: ['Nativescript', 'Vue', 'Cross Platform', 'Ns-Vue', 'Telerik', 'Progress'],
        selection: ""
      }
    },
    methods: {
      onChange(args){
        console.log(`Old index ${args.oldIndex}, New index ${args.newIndex}`)
        this.selection = this.options[args.newIndex]
      },
      onOpen(){
        console.log('opened')
      },
      onClose(){
        console.log('closed')
      },
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
    }
</style>
