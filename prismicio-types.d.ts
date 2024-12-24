// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice =
  | StatisticsSlice
  | ContactSlice
  | TestimonialsSlice
  | MyWorkSlice
  | HeroSlice
  | SocialsSlice
  | NavbarSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

export type AllDocumentTypes = HomeDocument;

/**
 * Item in *Contact → Default → Primary → Socials*
 */
export interface ContactSliceDefaultPrimarySocialsItem {
  /**
   * Social Icon field in *Contact → Default → Primary → Socials*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.socials[].social_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  social_icon: prismic.ImageField<never>;

  /**
   * Social Link field in *Contact → Default → Primary → Socials*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.socials[].social_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  social_link: prismic.LinkField;
}

/**
 * Primary content in *Contact → Default → Primary*
 */
export interface ContactSliceDefaultPrimary {
  /**
   * Title field in *Contact → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Sub Title field in *Contact → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.sub_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sub_title: prismic.RichTextField;

  /**
   * Button Text field in *Contact → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  button_text: prismic.RichTextField;

  /**
   * Button Background Colour field in *Contact → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: bg-primary
   * - **API ID Path**: contact.default.primary.button_background_colour
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  button_background_colour: prismic.SelectField<
    "bg-primary" | "bg-secondary" | "bg-tertiary",
    "filled"
  >;

  /**
   * Button Text Colour field in *Contact → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: text-primary
   * - **API ID Path**: contact.default.primary.button_text_colour
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  button_text_colour: prismic.SelectField<
    "text-primary" | "text-secondary" | "text-tertiary",
    "filled"
  >;

  /**
   * Button Text Font field in *Contact → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: font-rubik
   * - **API ID Path**: contact.default.primary.button_text_font
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  button_text_font: prismic.SelectField<"font-rubik" | "font-ubuntu", "filled">;

  /**
   * Contact Section Font field in *Contact → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: font-rubik
   * - **API ID Path**: contact.default.primary.contact_section_font
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  contact_section_font: prismic.SelectField<
    "font-rubik" | "font-ubuntu",
    "filled"
  >;

  /**
   * Background Colour field in *Contact → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: bg-primary
   * - **API ID Path**: contact.default.primary.background_colour
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  background_colour: prismic.SelectField<
    "bg-primary" | "bg-secondary" | "bg-tertiary",
    "filled"
  >;

  /**
   * Socials field in *Contact → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.socials[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socials: prismic.GroupField<Simplify<ContactSliceDefaultPrimarySocialsItem>>;

  /**
   * Contact Us font colour field in *Contact → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: text-primary
   * - **API ID Path**: contact.default.primary.contact_us_font_colour
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  contact_us_font_colour: prismic.SelectField<
    "text-primary" | "text-secondary" | "text-tertiary",
    "filled"
  >;
}

/**
 * Default variation for Contact Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Contact*
 */
type ContactSliceVariation = ContactSliceDefault;

/**
 * Contact Shared Slice
 *
 * - **API ID**: `contact`
 * - **Description**: Contact
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSlice = prismic.SharedSlice<
  "contact",
  ContactSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceSocialsPrimary {
  /**
   * Greeting text hero section field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.socials.primary.greeting_text_hero_section
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  greeting_text_hero_section: prismic.RichTextField;

  /**
   * greeting_text_font field in *Hero → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: font-rubik
   * - **API ID Path**: hero.socials.primary.greeting_text_font
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  greeting_text_font: prismic.SelectField<
    "font-rubik" | "font-ubuntu",
    "filled"
  >;

  /**
   * Introduction text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.socials.primary.introduction_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  introduction_text: prismic.RichTextField;

  /**
   * Name field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.socials.primary.name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.TitleField;

  /**
   * Name Font Weight field in *Hero → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: font-thin
   * - **API ID Path**: hero.socials.primary.name_font_weight
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  name_font_weight: prismic.SelectField<
    | "font-thin"
    | "font-extralight"
    | "font-light"
    | "font-normal"
    | "font-medium"
    | "font-semibold"
    | "font-bold"
    | "font-extrabold"
    | "font-black",
    "filled"
  >;

  /**
   * Hero section secondary text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.socials.primary.hero_section_secondary_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  hero_section_secondary_text: prismic.RichTextField;

  /**
   * Hero section secondary sub text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.socials.primary.hero_section_secondary_sub_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  hero_section_secondary_sub_text: prismic.RichTextField;

  /**
   * Hero image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.socials.primary.hero_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_image: prismic.ImageField<never>;

  /**
   * Hero section text font field in *Hero → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: font-rubik
   * - **API ID Path**: hero.socials.primary.hero_section_text_font
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  hero_section_text_font: prismic.SelectField<
    "font-rubik" | "font-ubuntu",
    "filled"
  >;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `socials`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSocials = prismic.SharedSliceVariation<
  "socials",
  Simplify<HeroSliceSocialsPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceSocials;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *MyWork → Default → Primary → Work Card*
 */
export interface MyWorkSliceDefaultPrimaryWorkCardItem {
  /**
   * Card title field in *MyWork → Default → Primary → Work Card*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: my_work.default.primary.work_card[].card_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  card_title: prismic.RichTextField;

  /**
   * Work sub description field in *MyWork → Default → Primary → Work Card*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: my_work.default.primary.work_card[].work_sub_description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  work_sub_description: prismic.KeyTextField;

  /**
   * Read More button field in *MyWork → Default → Primary → Work Card*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: my_work.default.primary.work_card[].read_more_button
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  read_more_button: prismic.KeyTextField;

  /**
   * Redirect icon field in *MyWork → Default → Primary → Work Card*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: my_work.default.primary.work_card[].redirect_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  redirect_icon: prismic.ImageField<never>;

  /**
   * Blog Link field in *MyWork → Default → Primary → Work Card*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: my_work.default.primary.work_card[].blog_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  blog_link: prismic.LinkField;
}

/**
 * Primary content in *MyWork → Default → Primary*
 */
export interface MyWorkSliceDefaultPrimary {
  /**
   * Heading field in *MyWork → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: my_work.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Work Card field in *MyWork → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: my_work.default.primary.work_card[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  work_card: prismic.GroupField<
    Simplify<MyWorkSliceDefaultPrimaryWorkCardItem>
  >;

  /**
   * Blog Card Background Color field in *MyWork → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: On Hover Background Color
   * - **Default Value**: hover:bg-primary
   * - **API ID Path**: my_work.default.primary.blog_card_background_color
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  blog_card_background_color: prismic.SelectField<
    "hover:bg-primary" | "hover:bg-secondary" | "hover:bg-tertiary",
    "filled"
  >;

  /**
   * Blog Card Background Color Static field in *MyWork → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Static Color
   * - **Default Value**: bg-secondary
   * - **API ID Path**: my_work.default.primary.blog_card_background_color_static
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  blog_card_background_color_static: prismic.SelectField<
    "bg-secondary" | "bg-primary" | "bg-tertiary",
    "filled"
  >;

  /**
   * Card Font field in *MyWork → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: font-rubik
   * - **API ID Path**: my_work.default.primary.card_font
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  card_font: prismic.SelectField<"font-rubik" | "font-ubuntu", "filled">;

  /**
   * Font color Onhover field in *MyWork → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: On Mouse Hover
   * - **Default Value**: hover:text-primary
   * - **API ID Path**: my_work.default.primary.font_color_onhover
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  font_color_onhover: prismic.SelectField<
    "hover:text-primary" | "hover:text-secondary" | "hover:text-tertiary",
    "filled"
  >;

  /**
   * Font color Static field in *MyWork → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Static Color
   * - **Default Value**: text-primary
   * - **API ID Path**: my_work.default.primary.font_color_static
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  font_color_static: prismic.SelectField<
    "text-primary" | "text-secondary" | "text-tertiary",
    "filled"
  >;
}

/**
 * Default variation for MyWork Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MyWorkSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MyWorkSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *MyWork*
 */
type MyWorkSliceVariation = MyWorkSliceDefault;

/**
 * MyWork Shared Slice
 *
 * - **API ID**: `my_work`
 * - **Description**: MyWork
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MyWorkSlice = prismic.SharedSlice<"my_work", MyWorkSliceVariation>;

/**
 * Primary content in *Navbar → Default → Primary*
 */
export interface NavbarSliceDefaultPrimary {
  /**
   * Logo field in *Navbar → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.default.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * search field in *Navbar → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.default.primary.search
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  search: prismic.ImageField<never>;

  /**
   * Header Menu toggle title field in *Navbar → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.default.primary.header_menu_toggle_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  header_menu_toggle_title: prismic.KeyTextField;

  /**
   * Header Menu toggle icon field in *Navbar → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.default.primary.header_menu_toggle_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  header_menu_toggle_icon: prismic.ImageField<never>;
}

/**
 * Default variation for Navbar Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavbarSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavbarSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Navbar*
 */
type NavbarSliceVariation = NavbarSliceDefault;

/**
 * Navbar Shared Slice
 *
 * - **API ID**: `navbar`
 * - **Description**: Navbar
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavbarSlice = prismic.SharedSlice<"navbar", NavbarSliceVariation>;

/**
 * Item in *Portfolio → Default → Primary → Image Gallery*
 */
export interface PortofolioSliceDefaultPrimaryImageGalleryItem {
  /**
   * Image field in *Portfolio → Default → Primary → Image Gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: portofolio.default.primary.image_gallery[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *Portfolio → Default → Primary → Image Gallery*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: portofolio.default.primary.image_gallery[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Primary content in *Portfolio → Default → Primary*
 */
export interface PortofolioSliceDefaultPrimary {
  /**
   * Title field in *Portfolio → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: portofolio.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Image Gallery field in *Portfolio → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: portofolio.default.primary.image_gallery[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  image_gallery: prismic.GroupField<
    Simplify<PortofolioSliceDefaultPrimaryImageGalleryItem>
  >;
}

/**
 * Default variation for Portfolio Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PortofolioSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PortofolioSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Portfolio*
 */
type PortofolioSliceVariation = PortofolioSliceDefault;

/**
 * Portfolio Shared Slice
 *
 * - **API ID**: `portofolio`
 * - **Description**: Portofolio
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PortofolioSlice = prismic.SharedSlice<
  "portofolio",
  PortofolioSliceVariation
>;

/**
 * Item in *Socials → Default → Primary → Social Link*
 */
export interface SocialsSliceDefaultPrimarySocialLinkItem {
  /**
   * Social Image field in *Socials → Default → Primary → Social Link*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: socials.default.primary.social_link[].social_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  social_image: prismic.ImageField<never>;

  /**
   * Social Link field in *Socials → Default → Primary → Social Link*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: socials.default.primary.social_link[].social_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  social_link: prismic.LinkField;
}

/**
 * Primary content in *Socials → Default → Primary*
 */
export interface SocialsSliceDefaultPrimary {
  /**
   * Social Link field in *Socials → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: socials.default.primary.social_link[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social_link: prismic.GroupField<
    Simplify<SocialsSliceDefaultPrimarySocialLinkItem>
  >;
}

/**
 * Default variation for Socials Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SocialsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SocialsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Socials*
 */
type SocialsSliceVariation = SocialsSliceDefault;

/**
 * Socials Shared Slice
 *
 * - **API ID**: `socials`
 * - **Description**: Socials
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SocialsSlice = prismic.SharedSlice<
  "socials",
  SocialsSliceVariation
>;

/**
 * Item in *Statistics → Default → Primary → Stats*
 */
export interface StatisticsSliceDefaultPrimaryStatsItem {
  /**
   * Numbers field in *Statistics → Default → Primary → Stats*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: statistics.default.primary.stats[].numbers
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  numbers: prismic.RichTextField;

  /**
   * Title field in *Statistics → Default → Primary → Stats*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: statistics.default.primary.stats[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Primary content in *Statistics → Default → Primary*
 */
export interface StatisticsSliceDefaultPrimary {
  /**
   * Stats field in *Statistics → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: statistics.default.primary.stats[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  stats: prismic.GroupField<Simplify<StatisticsSliceDefaultPrimaryStatsItem>>;

  /**
   * Statistics Font Colour field in *Statistics → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: text-primary
   * - **API ID Path**: statistics.default.primary.statistics_font_colour
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  statistics_font_colour: prismic.SelectField<
    "text-primary" | "text-secondary" | "text-tertiary",
    "filled"
  >;

  /**
   * Statistics Font Family field in *Statistics → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: font-rubik
   * - **API ID Path**: statistics.default.primary.statistics_font_family
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  statistics_font_family: prismic.SelectField<
    "font-rubik" | "font-ubuntu",
    "filled"
  >;
}

/**
 * Default variation for Statistics Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StatisticsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<StatisticsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Statistics*
 */
type StatisticsSliceVariation = StatisticsSliceDefault;

/**
 * Statistics Shared Slice
 *
 * - **API ID**: `statistics`
 * - **Description**: Statistics
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StatisticsSlice = prismic.SharedSlice<
  "statistics",
  StatisticsSliceVariation
>;

/**
 * Item in *Testimonials → Default → Primary → Testimonial card*
 */
export interface TestimonialsSliceDefaultPrimaryTestimonialCardItem {
  /**
   * Image field in *Testimonials → Default → Primary → Testimonial card*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonial_card[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Testimonial Description field in *Testimonials → Default → Primary → Testimonial card*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonial_card[].testimonial_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  testimonial_description: prismic.RichTextField;

  /**
   * Name field in *Testimonials → Default → Primary → Testimonial card*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonial_card[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Desgination field in *Testimonials → Default → Primary → Testimonial card*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonial_card[].desgination
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  desgination: prismic.RichTextField;

  /**
   * Reverse field in *Testimonials → Default → Primary → Testimonial card*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: testimonials.default.primary.testimonial_card[].reverse
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  reverse: prismic.BooleanField;
}

/**
 * Primary content in *Testimonials → Default → Primary*
 */
export interface TestimonialsSliceDefaultPrimary {
  /**
   * Title field in *Testimonials → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Testimonial Quote field in *Testimonials → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonial_quote
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  testimonial_quote: prismic.ImageField<never>;

  /**
   * Testimonial card field in *Testimonials → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonial_card[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  testimonial_card: prismic.GroupField<
    Simplify<TestimonialsSliceDefaultPrimaryTestimonialCardItem>
  >;

  /**
   * Testimonial Fonts field in *Testimonials → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: font-rubik
   * - **API ID Path**: testimonials.default.primary.testimonial_fonts
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  testimonial_fonts: prismic.SelectField<
    "font-rubik" | "font-ubuntu",
    "filled"
  >;

  /**
   * Testimonial Font Colour field in *Testimonials → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: text-primary
   * - **API ID Path**: testimonials.default.primary.testimonial_font_colour
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  testimonial_font_colour: prismic.SelectField<
    "text-primary" | "text-secondary",
    "filled"
  >;
}

/**
 * Default variation for Testimonials Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestimonialsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Testimonials*
 */
type TestimonialsSliceVariation = TestimonialsSliceDefault;

/**
 * Testimonials Shared Slice
 *
 * - **API ID**: `testimonials`
 * - **Description**: Testimonials
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSlice = prismic.SharedSlice<
  "testimonials",
  TestimonialsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      AllDocumentTypes,
      ContactSlice,
      ContactSliceDefaultPrimarySocialsItem,
      ContactSliceDefaultPrimary,
      ContactSliceVariation,
      ContactSliceDefault,
      HeroSlice,
      HeroSliceSocialsPrimary,
      HeroSliceVariation,
      HeroSliceSocials,
      MyWorkSlice,
      MyWorkSliceDefaultPrimaryWorkCardItem,
      MyWorkSliceDefaultPrimary,
      MyWorkSliceVariation,
      MyWorkSliceDefault,
      NavbarSlice,
      NavbarSliceDefaultPrimary,
      NavbarSliceVariation,
      NavbarSliceDefault,
      PortofolioSlice,
      PortofolioSliceDefaultPrimaryImageGalleryItem,
      PortofolioSliceDefaultPrimary,
      PortofolioSliceVariation,
      PortofolioSliceDefault,
      SocialsSlice,
      SocialsSliceDefaultPrimarySocialLinkItem,
      SocialsSliceDefaultPrimary,
      SocialsSliceVariation,
      SocialsSliceDefault,
      StatisticsSlice,
      StatisticsSliceDefaultPrimaryStatsItem,
      StatisticsSliceDefaultPrimary,
      StatisticsSliceVariation,
      StatisticsSliceDefault,
      TestimonialsSlice,
      TestimonialsSliceDefaultPrimaryTestimonialCardItem,
      TestimonialsSliceDefaultPrimary,
      TestimonialsSliceVariation,
      TestimonialsSliceDefault,
    };
  }
}
