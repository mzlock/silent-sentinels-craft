<?php
/**
 * Response Jif plugin for Craft CMS
 *
 * Response Jif Variable
 *
 * @author    Benjamin Modayil
 * @copyright Copyright (c) 2017 Benjamin Modayil
 * @link      www.modayil.me
 * @package   ResponseJif
 * @since     1
 */

namespace Craft;

class ResponseJifVariable
{
    /**
     */
    public function pasteJif($key = null)
    {
        return craft()->responseJif->getJif($key);
    }
}