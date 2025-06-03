using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using QRTools.Models;

namespace QRTools.Controllers;

public class QrController : Controller
{
    private readonly ILogger<QrController> _logger;

    public IActionResult qr_code()
    {
        return View();
    }

    public IActionResult wifi_code()
    {
        return View();
    }

    public IActionResult vcard_code()
    {
        return View();
    }

    public IActionResult email_code()
    {
        return View();
    }

    public IActionResult sms_code()
    {
        return View();
    }

    public QrController(ILogger<QrController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}