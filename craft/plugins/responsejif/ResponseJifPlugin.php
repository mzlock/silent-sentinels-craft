<?php
/**
 * Response Jif plugin for Craft CMS
 *
 * Responds with a relevant Jif
 *
 * @author    Benjamin Modayil
 * @copyright Copyright (c) 2017 Benjamin Modayil
 * @link      www.modayil.me
 * @package   ResponseJif
 * @since     1
 */

namespace Craft;

class ResponseJifPlugin extends BasePlugin
{
    /**
     * @return mixed
     */
    public function init()
    {
        parent::init();
    }

    /**
     * @return mixed
     */
    public function getName()
    {
         return Craft::t('Response Jif');
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return Craft::t('Responds with a relevant Jif');
    }

    /**
     * @return string
     */
    public function getDocumentationUrl()
    {
        return '???';
    }

    /**
     * @return string
     */
    public function getReleaseFeedUrl()
    {
        return '???';
    }

    /**
     * @return string
     */
    public function getVersion()
    {
        return '1';
    }

    /**
     * @return string
     */
    public function getSchemaVersion()
    {
        return '1';
    }

    /**
     * @return string
     */
    public function getDeveloper()
    {
        return 'Benjamin Modayil';
    }

    /**
     * @return string
     */
    public function getDeveloperUrl()
    {
        return 'www.modayil.me';
    }

    /**
     * @return bool
     */
    public function hasCpSection()
    {
        return false;
    }

    /**
     */
    public function onBeforeInstall()
    {
    }

    /**
     */
    public function onAfterInstall()
    {
    }

    /**
     */
    public function onBeforeUninstall()
    {
    }

    /**
     */
    public function onAfterUninstall()
    {
    }

    /**
     * @return array
     */
    protected function defineSettings()
    {
        return array(
            'welcomeJif' => array(AttributeType::String, 'label' => 'Welcome Jif', 'default' => ''),
            'byeJif' => array(AttributeType::String, 'label' => 'Goodbye Jif', 'default' => ''),
            'happyJif' => array(AttributeType::String, 'label' => 'Happy Jif', 'default' => ''),
        );
    }

    /**
     * @return mixed
     */
    public function getSettingsHtml()
    {
       return craft()->templates->render('responsejif/ResponseJif_Settings', array(
           'settings' => $this->getSettings()
       ));
    }

    /**
     * @param mixed $settings  The plugin's settings
     *
     * @return mixed
     */
    public function prepSettings($settings)
    {
        // Modify $settings here...

        return $settings;
    }

}