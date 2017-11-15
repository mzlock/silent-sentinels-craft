<?php
/**
 * Response Jif plugin for Craft CMS
 *
 * ResponseJif Service
 *
 * @author    Benjamin Modayil
 * @copyright Copyright (c) 2017 Benjamin Modayil
 * @link      www.modayil.me
 * @package   ResponseJif
 * @since     1
 */

namespace Craft;

class ResponseJifService extends BaseApplicationComponent
{
    /**
     */

    private $settings;

    public function __construct()
    {
        $this->settings = craft()->plugins->getPlugin('responseJif')->getSettings();
    }

    public function getJif($key)
    {
        $key = $key . 'Jif';

        if (isset($this->settings->{$key}))
        {
            return $this->settings->{$key};
        }

        return 'https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif';
    }

}