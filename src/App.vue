<script setup lang="ts">
import { reactive } from "vue";

import {
  type InformativeContext,
  DataFrame,
  type DropdownItem,
  DropdownAlignment,
  Colours,
  TextFieldType,
  type TextFieldContext,
  type TextFieldValidator,
} from "./types";

// Buttons
import {
  BigButton,
  LinkButton,
  OutlinedButton,
  SmallButton,
  TextButton
} from "./components/button";
import IconButton from "./components/button/IconButton.vue";

// Content
import {
  DataTable,
  FloatingCard,
  OutlinedCard
} from "./components/content";

// Informative
import {
  AlertDialog,
  Banner,
  ProgressIndicator,
  Snackbar
} from "./components/informative";
import SpinnerLoader from "./components/informative/SpinnerLoader.vue";

// Inputs
import {
  AnimatedTextField,
  Checkbox,
  Chips,
  Dropdown,
  StaticTextField,
  Switch
} from "./components/input";

const tableData = new DataFrame(
  ["Column 1", "Column 2", "Column 3"],
  [
    {"Column 1": "Row 1", "Column 2": "Row 1", "Column 3": "Row 1"},
    {"Column 1": "Row 2", "Column 2": "Row 2", "Column 3": "Row 2"},
    {"Column 1": "Row 3", "Column 2": "Row 3", "Column 3": "Row 3"}
  ]
);

const renameHeader = {
  "Column 1": "Spiderman",
  "Column 2": "Superman",
  "Column 3": "Thor",
};

const dropdownItems = [
  { label: "Item 1", value: "item-1" },
  { label: "Item 2", value: "item-2" },
  { label: "Item 3", value: "item-3" }
] as DropdownItem[];

let ctx_alertDialog: InformativeContext;
let ctx_banner: InformativeContext;
let ctx_snackbar: InformativeContext;

let emailValidator: TextFieldValidator = (value: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return ""
  } else {
    return "Invalid email address"
  }
}
</script>

<template>
  <div id="main">
    
    <!-- ===== Buttons ===== -->

    <big-button 
      class="cpt-margin"
      label="Big Button"
      colour="#ffffff"
      :backgroundColour="Colours.primary">
    </big-button>
    
    <div class="cpt-space-x cpt-margin">
      <icon-button
        :colour="Colours.danger"
        :filled="true"
        label="Delete">
        <template #icon="{ width, height, colour }">
          <svg :width="width" :height="height" fill="none" :stroke="colour" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
        </template>
      </icon-button>

      <icon-button
        :colour="Colours.primary"
        :filled="true">
        <template #icon="{ width, height, colour }">
          <svg :width="width" :height="height" :fill="colour" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
          </svg>
        </template>
      </icon-button>

      <icon-button
        :colour="Colours.primary"
        :filled="true">
        <template #icon="{ width, height, colour }">
          <svg :width="width" :height="height" :fill="colour" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
            <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"></path>
          </svg>
        </template>
      </icon-button>
    </div>
    
    <link-button 
      class="cpt-margin"
      label="Link Button"
      :colour="Colours.primary">
    </link-button>
    
    <outlined-button
      class="cpt-margin"
      label="Outlined Button"
      :colour="Colours.primary">
    </outlined-button>
    
    <small-button
      class="cpt-margin"
      label="Small Button"
      colour="#ffffff"
      :background="Colours.primary">
    </small-button>
    
    <text-button
      class="cpt-margin"
      label="Text Button"
      :colour="Colours.primary">
    </text-button>
    
    <hr class="divider">

    
    
    <!-- ===== Content ===== -->

    <div class="cpt-space-x">
      <data-table
        class="cpt-margin"
        :dataframe="tableData"
        :colour="Colours.primary"
        :checkbox="true"
        rowMousePointer
        @change="c => console.log(c)"
        @row="r => console.log(r)">
      </data-table>

      <data-table
        class="cpt-margin"
        :dataframe="tableData"
        :colour="Colours.primary"
        :checkbox="true"
        :renameHeader="renameHeader">
      </data-table>
    </div>
    
    <div class="cpt-space-x">
      <floating-card
        class="cpt-margin"
        :hover="true"
        colour="#ffffff"
        paddingSize="small">
        <h1><b>Floating Card</b></h1>
        <p>Hey, I am inside an floating card!</p>
      </floating-card>
      
      <floating-card
        class="cpt-margin"
        :hover="true"
        colour="#ffffff"
        paddingSize="medium">
        <h1><b>Floating Card</b></h1>
        <p>Hey, I am inside an floating card!</p>
      </floating-card>
      
      <floating-card
        class="cpt-margin"
        :hover="true"
        colour="#ffffff"
        paddingSize="large">
        <h1><b>Floating Card</b></h1>
        <p>Hey, I am inside an floating card!</p>
      </floating-card>
    </div>
    
    <div class="cpt-space-x">
      <outlined-card
        class="cpt-margin"
        borderColour="#ededed"
        colour="#ffffff"
        :hover="true"
        paddingSize="small">
        <h1><b>Outlined Card</b></h1>
        <p>Hey, I am inside an outlined card!</p>
      </outlined-card>
      
      <outlined-card
        class="cpt-margin"
        borderColour="#ededed"
        colour="#ffffff"
        :hover="true"
        paddingSize="medium">
        <h1><b>Outlined Card</b></h1>
        <p>Hey, I am inside an outlined card!</p>
      </outlined-card>
      
      <outlined-card
        class="cpt-margin"
        borderColour="#ededed"
        colour="#ffffff"
        :hover="true"
        paddingSize="large">
        <h1><b>Outlined Card</b></h1>
        <p>Hey, I am inside an outlined card!</p>
      </outlined-card>
    </div>
    
    <hr class="divider">

    
    
    <!-- ===== Inputs ===== -->

    <animated-text-field
      class="cpt-margin"
      label="Animated Text Field"
      :colour="Colours.primary"
      :type="TextFieldType.email"
      :validator="emailValidator">
    </animated-text-field>
    
    <checkbox
      class="cpt-margin"
      :colour="Colours.primary"
      :size="18"
      checked>
    </checkbox>
    
    <chips
      class="cpt-margin"
      label="Chips"
      group="chips"
      :colour="Colours.primary">
    </chips>
    
    <dropdown
      :alignment="DropdownAlignment.left"
      :items="dropdownItems"
      :colour="Colours.primary"
      @change="item => alert(item)">
      <outlined-button label="Dropdown" :colour="Colours.primary"></outlined-button>
    </dropdown>
    
    <static-text-field
      class="cpt-margin"
      label="Static Text Field"
      :colour="Colours.primary"
      :type="TextFieldType.email"
      :validator="emailValidator">
    </static-text-field>
    
    <Switch
      class="cpt-margin"
      label="Switch"
      :colour="Colours.primary"
      :checked="true">
    </Switch>
    
    <hr class="divider">

    
    
    <!-- ===== Informative ===== -->

    <outlined-button @click="ctx_alertDialog.show()" class="cpt-margin" label="Alert Dialog" :colour="Colours.primary" />
    <alert-dialog
      title="Alert Dialog"
      content="This is an alert dialog."
      @context="ctx => ctx_alertDialog = ctx">
    </alert-dialog>
    
    <outlined-button @click="ctx_banner.show()" class="cpt-margin" label="Banner" :colour="Colours.primary" />
    <banner
      title="Banner"
      content="This is a banner."
      :colour="Colours.primary"
      :duration="5000"
      @context="ctx => ctx_banner = ctx">
    </banner>
    
    <progress-indicator
      :colour="Colours.primary"
      :value="0.1">
    </progress-indicator>
    
    <outlined-button @click="ctx_snackbar.show()" class="cpt-margin" label="Snackbar" :colour="Colours.primary" />
    <snackbar
      class="cpt-margin"
      content="This is a snackbar."
      colour="#ffffff"
      :backgroundColour="Colours.primary"
      :duration="5000"
      @context="ctx => ctx_snackbar = ctx">
    </snackbar>
    
    <!-- <spinner-loader
      class="cpt-margin"
      colour="primary">
    </spinner-loader> -->

  </div>
</template>

<style>
@import "./styles/reset.css";

:root {
  --primary: 23, 105, 255;
  --accent: 131, 72, 255;
  --success: 62, 238, 145;
  --warning: 255, 192, 0;
  --danger: 255, 89, 89;

  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

#main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cpt-margin {
  margin: 2rem 0;
}

.divider {
  width: 50%;
  color: grey;
}

.cpt-space-x {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.cpt-space-x > * + * {
  margin-left: 1rem;
}
</style>